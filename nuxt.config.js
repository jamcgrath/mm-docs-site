var hljs = require('highlight.js')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mm-docs-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/mm-css/dist/styles.css',
    '~/mm-icons/dist/mm-icons.css',
    '~/node_modules/highlight.js/styles/a11y-dark.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mapCss.js',
    '~/plugins/copyToClipboard.js',
    '~/plugins/kebabcase.js',
    '~/plugins/getMarkdown.js',
    '~/plugins/getCode.js',
    '~/plugins/nanoid.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    transpile: ['nanoid'],
  },

  markdownit: {
    injected: true,
    html: true,
    breaks: true,
    runtime: true,
    use: ['markdown-it-highlightjs'],
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs p-3 br-8"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
          )
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      )
    },
  },
  googleFonts: {
    families: {
      'IBM Plex Mono': [400, 700],
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      'Playfair Display': {
        wght: [500],
        ital: [500],
      },
    },
  },
}
