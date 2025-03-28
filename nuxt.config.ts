// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-viewport',
    '@nuxt/icon',
    '@nuxthq/studio'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },
  compatibilityDate: '2024-11-10'
})