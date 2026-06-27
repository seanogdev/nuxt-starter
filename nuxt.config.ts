// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      meta: [{ name: 'robots', content: 'noindex, nofollow' }],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {},
  nitro: {
    preset: 'node-server',
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  typescript: {
    tsConfig: {
      include: ['../vitest.config.ts', '../oxlint.config.ts', '../oxfmt.config.ts'],
    },
  },
  compatibilityDate: '2026-02-24',
  eslint: {
    config: {
      stylistic: false,
      typescript: {
        tsconfigPath: './tsconfig.json',
      },
    },
  },
});
