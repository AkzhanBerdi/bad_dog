export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/content"
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => [
        // MathML elements
        'math', 'semantics', 'mrow', 'mi', 'mo', 'mn', 'msub', 'msup', 
        'msubsup', 'mfrac', 'mover', 'munderover', 'annotation', 'msqrt',
        'mtext', 'mspace', 'mglyph', 'malignmark', 'mstyle', 'mprescripts',
        'none', 'mtr', 'mtd', 'mtable', 'mroot', 'mmultiscripts', 'mlongdiv',
        'menclose', 'msline', 'mscarry', 'msgroup', 'mscarries', 'msrow',
        'mstack', 'munder', 'merror', 'mpadded', 'mphantom', 'maction',
        'path', 'svg', 'line', 'circle', 'ellipse', 'rect', 'polygon', 'polyline',
        'g', 'use', 'defs', 'marker'
      ].includes(tag.toLowerCase())
    }
  },

  content: {
    markdown: {
      remarkPlugins: [
        ['remark-math', {
          singleDollarTextMath: true
        }]
      ],
      rehypePlugins: [
        'rehype-katex',
      ],
      components: {
        code: 'ProseCode'
      }
    }
  },

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

  compatibilityDate: '2024-10-27'
})