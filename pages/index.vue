<template>
  <div id="app">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main role="main">
      <Hero @open-terminal="openTerminal" />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
    
    <!-- Footer -->
    <footer>
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
          <!-- Company Info -->
          <div>
            <h4 style="color: var(--accent); margin-bottom: 1rem;">Root Techlab</h4>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.6;">
              {{ t('footer.description') }}
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 style="color: var(--accent); margin-bottom: 1rem;">{{ t('footer.quick_links') }}</h4>
            <nav style="display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="#home" @click="scrollToSection('home')" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                {{ t('nav.home') }}
              </a>
              <a href="#about" @click="scrollToSection('about')" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                {{ t('about.title') }}
              </a>
              <a href="#services" @click="scrollToSection('services')" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                {{ t('services.title') }}
              </a>
              <a href="#projects" @click="scrollToSection('projects')" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                {{ t('projects.title') }}
              </a>
              <a href="#contact" @click="scrollToSection('contact')" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                {{ t('contact.title') }}
              </a>
            </nav>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h4 style="color: var(--accent); margin-bottom: 1rem;">{{ t('footer.contact_info') }}</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="mailto:evttenorio@outlook.com" style="color: var(--muted); text-decoration: none; font-size: 0.9rem;">
                evttenorio@outlook.com
              </a>
              <p style="color: var(--muted); font-size: 0.9rem; margin: 0;">
                Maceió, AL - Brasil
              </p>
            </div>
          </div>
        </div>
        
        <!-- Copyright -->
        <div style="text-align: center; padding-top: 2rem; border-top: 1px solid rgba(145, 211, 161, 0.2);">
          <p style="color: var(--muted); font-size: 0.85rem; margin: 0;">
            © {{ currentYear }} Root Techlab. {{ t('footer.rights_reserved') }}
          </p>
          <p style="color: var(--muted); font-size: 0.8rem; margin-top: 0.5rem;">
            {{ t('footer.built_with') }} {{ t('footer.for_sustainable_future') }}
          </p>
        </div>
      </div>
    </footer>
    
    <!-- Terminal Modal -->
    <TerminalModal 
      :open="terminalOpen" 
      @close="closeTerminal" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue' 
import About from '~/components/About.vue'
import Services from '~/components/Services.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'
import TerminalModal from '~/components/TerminalModal.vue'

const { t, locale } = useI18n()
const terminalOpen = ref(false)

// Current year for copyright
const currentYear = computed(() => new Date().getFullYear())

const openTerminal = () => {
  terminalOpen.value = true
}

const closeTerminal = () => {
  terminalOpen.value = false
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 70
    const offsetTop = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// SEO and meta tags setup
useSeoMeta({
  title: () => t('seo.title'),
  ogTitle: () => t('seo.title'),
  description: () => t('seo.description'),
  ogDescription: () => t('seo.description'),
  ogImage: 'https://root-techlab.com/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://root-techlab.com/twitter-image.png'
})

// Update document language when locale changes
watch(() => locale.value, (newLocale) => {
  if (process.client) {
    document.documentElement.lang = newLocale === 'pt' ? 'pt-BR' : 'en-US'
  }
})

// Set initial language attribute
onMounted(() => {
  if (process.client) {
    document.documentElement.lang = locale.value === 'pt' ? 'pt-BR' : 'en-US'
    
    // Add smooth scrolling fallback for older browsers
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      const style = document.createElement('style')
      style.textContent = `
        html {
          scroll-behavior: smooth;
        }
      `
      document.head.appendChild(style)
    }
  }
})

// Page metadata
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value === 'pt' ? 'pt-BR' : 'en-US')
  }
})
</script>

<style>
/* Global app styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Skip link for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--accent);
  color: var(--bg);
  padding: 8px;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
  z-index: 1000;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
}

/* Footer responsive adjustments */
@media (max-width: 768px) {
  footer div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    text-align: center;
  }
}
</style>