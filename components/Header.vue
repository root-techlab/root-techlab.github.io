<template>
  <header>
    <div class="header-content">
      <img 
        class="logo" 
        src="/root-techlab.png" 
        alt="Root Techlab Logo"
        width="40"
        height="40"
        loading="eager"
      />
      <h1>
        <code>root techlab</code>
      </h1>
    </div>

    <!-- Language Switch - Desktop -->
    <LanguageSwitch class="desktop-only" />

    <!-- Desktop Navigation -->
    <nav class="desktop-nav" role="navigation" aria-label="Main navigation">
      <a href="#home" @click="scrollToSection('home')" :aria-label="t('nav.home')">
        {{ t('nav.home') }}
      </a>
      <a href="#about" @click="scrollToSection('about')" :aria-label="t('about.title')">
        {{ t('about.title') }}
      </a>
      <a href="#services" @click="scrollToSection('services')" :aria-label="t('services.title')">
        {{ t('services.title') }}
      </a>
      <a href="#projects" @click="scrollToSection('projects')" :aria-label="t('projects.title')">
        {{ t('projects.title') }}
      </a>
      <a href="#contact" @click="scrollToSection('contact')" :aria-label="t('contact.title')">
        {{ t('contact.title') }}
      </a>
    </nav>

    <!-- Mobile Menu Toggle -->
    <button 
      class="mobile-menu-toggle"
      :class="{ active: mobileMenuOpen }"
      @click="toggleMobileMenu"
      :aria-expanded="mobileMenuOpen"
      aria-label="Toggle mobile menu"
      type="button"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ active: mobileMenuOpen }" role="navigation" aria-label="Mobile navigation">
      <div class="mobile-nav-content">
        <LanguageSwitch />
        <a href="#home" @click="scrollToSection('home')" :aria-label="t('nav.home')">
          {{ t('nav.home') }}
        </a>
        <a href="#about" @click="scrollToSection('about')" :aria-label="t('about.title')">
          {{ t('about.title') }}
        </a>
        <a href="#services" @click="scrollToSection('services')" :aria-label="t('services.title')">
          {{ t('services.title') }}
        </a>
        <a href="#projects" @click="scrollToSection('projects')" :aria-label="t('projects.title')">
          {{ t('projects.title') }}
        </a>
        <a href="#contact" @click="scrollToSection('contact')" :aria-label="t('contact.title')">
          {{ t('contact.title') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitch from './LanguageSwitch.vue'

const { t } = useI18n()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const scrollToSection = (sectionId: string) => {
  // Close mobile menu if open
  if (mobileMenuOpen.value) {
    toggleMobileMenu()
  }

  // Smooth scroll to section
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 70 // var(--header-height)
    const offsetTop = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  const header = document.querySelector('header')
  
  if (mobileMenuOpen.value && header && !header.contains(target)) {
    toggleMobileMenu()
  }
}

// Close mobile menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    toggleMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
  // Reset body overflow
  document.body.style.overflow = ''
})
</script>

<style scoped>
.desktop-nav {
  display: flex;
}

.desktop-only {
  display: flex;
}

@media (max-width: 768px) {
  .desktop-nav,
  .desktop-only {
    display: none;
  }
}</style>