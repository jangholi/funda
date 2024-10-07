// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-08',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],

  routeRules: {
    '/': { redirect: '/detail/b81854f6-8150-4de6-86d8-ffa7caa8d0f8' },
  },

  runtimeConfig: {
    fundaAPIKey: process.env.FUNDA_API_KEY,
  }
})