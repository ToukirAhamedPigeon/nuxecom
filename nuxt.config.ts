// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-25',
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    externals: {
      inline: ['@prisma/client']
    }
  },
  experimental: {
      scanPageMeta: 'after-resolve',
      sharedPrerenderData: false,
      componentIslands: true,
      compileTemplate: true,
      resetAsyncDataToUndefined: true,
      templateUtils: true,
      relativeWatchPaths: true,
      normalizeComponentNames: false,
      spaLoadingTemplateLocation: 'within',
      defaults: {
        useAsyncData: {
          deep: true
        }
      }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@prisma/nuxt',
    'nuxt-auth-utils'
  ],
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  }
})