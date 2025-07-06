import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  ssr: true,
  future: {
    compatibilityVersion: 4
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxthq/studio'
  ],
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'cupcake'
      }
    }
  }
})
