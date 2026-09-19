// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ content: 'noindex, nofollow', name: 'robots' }],
    },
  },
  compatibilityDate: '2026-02-24',
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      stylistic: false,
      typescript: {
        tsconfigPath: './tsconfig.json',
      },
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    preset: 'node-server',
  },
  runtimeConfig: {},
  typescript: {
    tsConfig: {
      include: ['../vitest.config.ts', '../oxlint.config.ts', '../oxfmt.config.ts'],
    },
  },
});
