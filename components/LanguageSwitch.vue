<template>
  <div class="language-switch" role="group" :aria-label="t('nav.language_switch')">
    <button
      type="button"
      :class="['lang-btn', { active: locale === 'en' }]"
      @click="switchLang('en')"
      :aria-pressed="locale === 'en'"
      :aria-label="t('nav.switch_to_english')"
    >
      EN
    </button>

    <button
      type="button"
      :class="['lang-btn', { active: locale === 'pt' }]"
      @click="switchLang('pt')"
      :aria-pressed="locale === 'pt'"
      :aria-label="t('nav.switch_to_portuguese')"
    >
      PT-BR
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

async function switchLang(code: string) {
  try {
    // Set the locale using the i18n module
    await setLocale(code)
    
    // Get the localized path for the current route
    const localizedPath = switchLocalePath(code)
    
    // Navigate to the localized path if it's different from current
    if (localizedPath && localizedPath !== router.currentRoute.value.fullPath) {
      await navigateTo(localizedPath)
    }
    
    // Store preference in localStorage for persistence
    if (process.client) {
      localStorage.setItem('preferred-language', code)
    }
    
    // Update document language attribute
    if (process.client) {
      document.documentElement.lang = code === 'pt' ? 'pt-BR' : 'en-US'
    }
    
  } catch (error) {
    console.warn('Language switch failed:', error)
    // Fallback: just set the locale
    locale.value = code
  }
}
</script>