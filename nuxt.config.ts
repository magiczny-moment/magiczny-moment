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
    url: 'https://mm-event.pl', 
    name: 'Magiczny Moment Event' 
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