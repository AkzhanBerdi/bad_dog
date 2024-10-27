export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/content"
  ],

  content: {
    markdown: {
      remarkPlugins: [
        ['remark-math', {
          singleDollarTextMath: true
        }]
      ],
      rehypePlugins: [
        'rehype-katex'
      ],
      components: {
        code: 'ProseCode'
      }
    }
  },

  // Use CDN instead of local file
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
          integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  // Remove the css array since we're using CDN
  // css: ['/static/katext.css'],

  compatibilityDate: '2024-10-27'
})