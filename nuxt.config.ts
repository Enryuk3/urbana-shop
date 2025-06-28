import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],
  fonts: {
    families: [
      { name: 'Barlow', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
    ],
  },
  icon: {
    customCollections: [
      {
        prefix: 'iconly',
        dir: './assets/iconly',
      },
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
