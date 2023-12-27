// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },

//   modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

//   content: {},
// });

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    // experimental: {
    //   clientDB: true
    // },
    // documentDriven: true,
  },
  experimental: {
    renderJsonPayloads: false
  },
  });