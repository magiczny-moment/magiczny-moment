// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-viewport',
    '@nuxt/icon',
    '@nuxthq/studio',
    '@nuxt/image'
  ],

  routeRules: {
    '/': { prerender: true }
  },
  site: {
    url: 'https://mm-event.pl', // Zmień na swoją domenę,
    name: 'Magiczny Moment Event', 
  },
  sitemap: {
    hostname: 'https://mm-event.pl', // Zmień na swoją domenę,
    gzip: true, // Opcjonalnie włącz kompresję gzip
    routes: async () => {
      const { $content } = require('@nuxt/content') // Jeśli używasz @nuxt/content
      const offers = await $content('oferta').fetch()
    
      // Generuj trasy dla ofert
      const offersRoutes = offers.map(offer => `/oferta/${offer.slug}`)

      return [
        '/', // Dodaj statyczne trasy
        '/#oferta',
        '/#kontakt',
        ...offersRoutes,
      ]
    }
  },
  icon: {
    provider: 'iconify',
    serverBundle: false,
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
  },
  image: {
    format: ['webp'],
     screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },
  compatibilityDate: '2024-11-10'
})