// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      strapi: {
        url: 'https://seashell-app-qniep.ondigitalocean.app' // [LOCAL_SERVER] http://localhost:1337
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

  build: {
    transpile: ['@heroicons/vue']
  },

  strapi: {
    url: 'https://seashell-app-qniep.ondigitalocean.app',
    auth: {
      populate: '*'
    },
    cookie: {
      sameSite: true,
      path: '/'
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/assets/styles/_vars.scss';
          `
        }
      }
    }
  }
})
