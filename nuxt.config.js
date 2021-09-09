import Vue from 'vue'
import * as Integrations from '@sentry/integrations'
import config from './config'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  srcDir: 'src/',
  server: {
    host: config.host,
    port: config.port
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - ' + config.appNmae,
    title: config.appNmae,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: config.description },
      { hid: 'keyword', name: 'keywords', content: '' },
      // The Open Graph protocol
      { hid: 'og:description', property: 'og:description', content: config.description },
      { hid: 'og:title', property: 'og:title', content: 'DAS - Cross-chain decentralized domain/account' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DAS - Cross-chain decentralized domain/account' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://da.systems/' },
      { hid: 'og:image', property: 'og:image', content: 'https://da.systems/images/das-og-image.png' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'DAS - Cross-chain decentralized domain/account' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'DAS - Cross-chain decentralized domain/account' },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://da.systems/images/das-og-image.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'DAS - Cross-chain decentralized domain/account' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: '//at.alicdn.com/t/font_2342047_adokfstzwlb.js',
      async: true
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/init.scss',
    '~/assets/index.scss'
  ],

  // Customize the progress-bar color
  loading: { color: '#00aadd' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuex-persistedstate.ts',
    '~/plugins/i18n',
    '~/plugins/vee-validate',
    '~/plugins/services.ts',
    '~/plugins/alert.ts',
    '~/plugins/toast.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://sentry.nuxtjs.org/
    ['@nuxtjs/google-gtag', {
      id: config.googleAnalyticsId,
      debug: !config.isProd
    }],
    [
      '@nuxtjs/sentry',
      {
        dsn: config.sentryDsn,
        disabled: !config.isProd,
        config: {
          autoSessionTracking: false
        },
        integrations: [new Integrations.Vue({ Vue, attachProps: true })]
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    // disable prefetching globally
    prefetchLinks: false
  },

  render: {
    // prevent preload, improve first time performance
    resourceHints: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // For debug purpose
    'html.minify': !config.isProd,
    extractCSS: true,
    babel: {
      presets () {
        return []
      }
    }
  }
}
