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
  ],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
        },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png' }
      ]
    }
  },  
});
