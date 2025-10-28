import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false, // Habilitado para melhor SEO
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots' // Para robots.txt
  ],
  
  // Configuração de i18n otimizada
  i18n: {
    locales: [
      { 
        code: 'en', 
        iso: 'en-US', 
        file: 'en.json',
        name: 'English',
        isCatchallLocale: true
      },
      { 
        code: 'pt', 
        iso: 'pt-BR', 
        file: 'pt.json',
        name: 'Português (Brasil)'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'root_i18n',
      fallbackLocale: 'en',
      redirectOn: 'root'
    },
    strategy: 'prefix_except_default',
    compilation: {
      strictMessage: false
    }
  },

  // CSS
  css: ['~/assets/styles/main.css'],

  // Configurações de SEO e Performance
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Root Techlab - Technology rooted in a sustainable future.',
      titleTemplate: '%s | Root Techlab',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Root Techlab offers cutting-edge DevOps, web development, AI solutions, and green technology consulting. Sustainable digital solutions bridging research and production in Maceió, Brazil.' 
        },
        { name: 'keywords', content: 'DevOps, Web Development, AI, Green Technology, Sustainability, Cloud, Automation, Maceió, Brazil, Digital Solutions' },
        { name: 'author', content: 'Root Techlab' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0d2d25' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://root-techlab.com' },
        { property: 'og:title', content: 'Root Techlab - Technology rooted in a sustainable future.' },
        { property: 'og:description', content: 'Technology rooted in a sustainable future.' },
        { property: 'og:image', content: 'https://root-techlab.com/og-image.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'pt_BR' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://root-techlab.com' },
        { name: 'twitter:title', content: 'Root Techlab - Technology rooted in a sustainable future.' },
        { name: 'twitter:description', content: 'DevOps, Web Development, AI & Green Technology Solutions' },
        { name: 'twitter:image', content: 'https://root-techlab.com/twitter-image.png' },
        
        // Business/Local SEO
        { name: 'geo.region', content: 'BR-AL' },
        { name: 'geo.placename', content: 'Maceió, Alagoas' },
        { name: 'geo.position', content: '-9.6498;-35.7089' },
        { name: 'ICBM', content: '-9.6498, -35.7089' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://root-techlab.com' }
      ],
      script: [
        // Structured Data for Business
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Root Techlab",
            "description": "Technology solutions for sustainable digital transformation",
            "url": "https://root-techlab.com",
            "logo": "https://root-techlab.com/root-techlab.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contato@root-techlab.com",
              "contactType": "customer service",
              "availableLanguage": ["English", "Portuguese"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Maceió",
              "addressRegion": "AL",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://github.com/",
              "https://instagram.com/root.techlab"
            ],
            "founder": {
              "@type": "Person",
              "name": "Root Techlab Team"
            },
            "foundingDate": "2024",
            "industry": "Technology Services",
            "services": [
              "DevOps Consulting",
              "Web Development",
              "AI Solutions",
              "Green Technology Consulting"
            ]
          })
        }
      ]
    }
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/pt'
      ]
    }
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://root-techlab.com',
    gzip: true,
    routes: [
      '/',
      '/pt',
      '/pt#about',
      '/pt#services', 
      '/pt#projects',
      '/pt#contact',
      '/#about',
      '/#services',
      '/#projects', 
      '/#contact'
    ]
  },

  // Robots.txt
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://root-techlab.com/sitemap.xml'
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },

  // Build configuration
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/pt'
      ]
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://root-techlab.com',
      siteName: 'Root Techlab',
      siteDescription: 'Technology rooted in a sustainable future.'
    }
  },

  // Generate configuration for static sites
  generate: {
    fallback: true
  }
})