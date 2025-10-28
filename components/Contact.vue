<template>
  <section id="contact">
    <h3>{{ t('contact.title') }}</h3>
    <p style="text-align: center; max-width: 600px; margin: 0 auto 2rem;">
      {{ t('contact.prompt') }}
    </p>
    
    <div class="contact-buttons">
      <a 
        class="btn" 
        href="mailto:evttenorio@outlook.com"
        :aria-label="t('contact.email_aria')"
        rel="noopener"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        {{ t('contact.email') }}
      </a>
      
      <a 
        class="btn btn-secondary" 
        href="https://www.linkedin.com/in/everton-st" 
        target="_blank" 
        rel="noopener noreferrer"
        :aria-label="t('contact.linkedin_aria')"
      ><!--https://www.linkedin.com/company/root-techlab-->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.599 0 4.263 2.368 4.263 5.452v6.291zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.142 0 2.068.926 2.068 2.069 0 1.142-.926 2.068-2.068 2.068zM6.765 20.452H3.91V9h2.855v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
        LinkedIn
      </a>
      
      <a 
        class="btn btn-secondary" 
        href="https://instagram.com/root.techlab" 
        target="_blank" 
        rel="noopener noreferrer"
        :aria-label="t('contact.instagram_aria')"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Instagram
      </a>
    </div>

    <!-- Additional contact info -->
    <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(145, 211, 161, 0.2);">
      <p style="color: var(--muted); font-size: 0.9rem;">
        {{ t('contact.location') }}: Maceió, Alagoas, Brasil
      </p>
      <p style="color: var(--muted); font-size: 0.9rem; margin-top: 0.5rem;">
        {{ t('contact.response_time') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn svg {
  flex-shrink: 0;
}
</style>