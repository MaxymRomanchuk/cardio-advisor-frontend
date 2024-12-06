// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL,
      locale: process.env.LOCALE || 'ua',
    }
  }
})