export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    //"nuxt-content-assets",
    "@nuxtjs/google-analytics",
    "@nuxtjs/tailwindcss", 
    "@nuxt/content"
  ],
  content: {
  },
  googleAnalytics: {
    id: 'G-VSDTCMMC1P'
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  });