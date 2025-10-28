<template>
  <div class="image" role="img" :aria-label="t('home.hero.background_alt')"></div>
  <section id="home" class="hero">
    <h2>{{ t('home.hero.title') }}</h2>
    <p>{{ t('home.hero.subtitle') }}</p>
    
    <div class="hero-actions">
      <a 
        class="btn" 
        href="#projects" 
        @click="scrollToSection('projects')"
        :aria-label="t('site.cta_projects_aria')"
      >
        {{ t('site.cta_projects') }}
      </a>
      <button 
        class="btn btn-secondary" 
        @click="$emit('openTerminal')"
        :aria-label="t('home.terminal.open_aria')"
        type="button"
      >
        {{ t('home.terminal.open') }}
      </button>
    </div>

    <div class="terminal" role="region" :aria-label="t('home.terminal.label')">
      <code>
        <strong>
          <span style="color: white">root</span>@techlab ~&gt;
        </strong> 
        <span style="opacity: 0.9">{{ t('home.terminal.command') }}</span>
        <span class="blink" aria-hidden="true"></span>
      </code>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
</script>

<style scoped>
.image {
  background-image: linear-gradient(to bottom, rgba(26, 31, 27, 0.81), rgba(0, 0, 0, 0.8)), url("/techlab.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.9;
  will-change: transform;
}

.hero {
  position: relative;
  z-index: 1;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .image {
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
  }
}

@media (max-width: 480px) {
  .image {
    background-position: 30% center;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .image {
    background-attachment: scroll;
  }
}</style>