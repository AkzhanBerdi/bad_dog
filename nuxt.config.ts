export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
 //   "@nuxtjs/google-analytics",
    "@nuxtjs/tailwindcss", 
    "@nuxt/content",
  ],
  // googleAnalytics: {
  //   id: 'G-VSDTCMMC1P', // Replace with your Google Analytics tracking ID
  // },
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },
  css: [
    '/static/katext.css'
  ]  
});