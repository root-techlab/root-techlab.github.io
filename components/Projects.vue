<template>
  <section id="projects">
    <h3>{{ t('projects.title') }}</h3>
    <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem; color: var(--bg); font-size: 1.1rem;">
      {{ t('projects.placeholder') }}
    </p>
    
    <!-- Coming Soon Projects Preview -->
    <div class="projects-preview">
      <a style="text-decoration: none" href="https://rootloja.com.br">
      <div class="project-card coming-soon">
        <div class="project-icon">🌱</div>
        <h4>{{ t('projects.root_loja.title') }}</h4>
        <p>{{ t('projects.root_loja.description') }}</p>
        <div class="project-tags">
          <span class="tag">DevOps</span>
          <span class="tag">Web Dev</span>
          <span class="tag">Automation</span>
        </div>
      </div>
      </a>
      
      <div class="project-card coming-soon">
        <div class="project-icon">🌱</div>
        <h4>{{ t('projects.plant_rag.title') }}</h4>
        <p>{{ t('projects.plant_rag.description') }}</p>
        <div class="project-tags">
          <span class="tag">AI</span>
          <span class="tag">Web Dev</span>
          <span class="tag">DevOps</span>
        </div>
      </div>
      
      <div class="project-card coming-soon">
        <div class="project-icon">🚀</div>
        <h4>{{ t('projects.techlab_site.title') }}</h4>
        <p>{{ t('projects.techlab_site.description') }}</p>
        <div class="project-tags">
          <span class="tag">AI/ML</span>
          <span class="tag">RAG</span>
          <span class="tag">NLP</span>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div style="text-align: center; margin-top: 3rem;">
      <p style="color: var(--bg); margin-bottom: 1.5rem; font-weight: 500;">
        {{ t('projects.cta_text') }}
      </p>
      <a 
        class="btn-dark" 
        href="#contact"
        @click="scrollToSection('contact')"
        :aria-label="t('projects.cta_aria')"
      >
        {{ t('projects.cta_button') }}
      </a>
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
#projects {
  background: linear-gradient(135deg, #f8fffe, #e8f5f0);
  color: var(--bg);
  margin: 0;
  padding: 4rem 1.5rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.projects-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(13, 45, 37, 0.1);
  transition: var(--transition);
  border: 1px solid rgba(145, 211, 161, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), #7bc59a);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(13, 45, 37, 0.15);
}

.project-card.coming-soon {
  position: relative;
}

.project-card.coming-soon::after {
  content: attr(data-coming-soon);
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(145, 211, 161, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.project-card h4 {
  color: var(--bg);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.project-card p {
  color: rgba(13, 45, 37, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  background: rgba(145, 211, 161, 0.1);
  color: var(--accent);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(145, 211, 161, 0.3);
}

.btn-dark {
  background: var(--bg);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
}

.btn-dark:hover {
  background: var(--header);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(13, 45, 37, 0.3);
}

@media (max-width: 768px) {
  #projects {
    padding: 3rem 1rem;
  }
  
  .projects-preview {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .project-icon {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .project-tags {
    justify-content: center;
  }
  
  .tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
}</style>