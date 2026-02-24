<script setup>
useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} · Nuxt Starter` : 'Nuxt Starter'),
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});

const description = 'A clean Nuxt 4 starter built with Nuxt UI and TypeScript';

useSeoMeta({
  description,
  ogTitle: 'Nuxt Starter',
  ogDescription: description,
});
</script>

<template>
  <UApp>
    <div class="h-screen overflow-hidden">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
