// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      strapi: {
        url: 'http://localhost:1337'
      }
    }
  },

  css: [
    '@/assets/styles/index.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/strapi',
    '@pinia/nuxt'
  ],

  strapi: {
    auth: {
      populate: '*'
    },
    cookie: {
      path: '/'
    }
  }
})
