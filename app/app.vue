<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { href: '/favicon.ico', rel: 'icon', sizes: '32x32' },
    { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
    { href: '/site.webmanifest', rel: 'manifest' },
  ],
  meta: [{ content: 'width=device-width, initial-scale=1', name: 'viewport' }],
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} · Nuxt Starter` : 'Nuxt Starter'),
});

const description = 'A clean Nuxt 4 starter built with Nuxt UI and TypeScript';

useSeoMeta({
  description,
  ogDescription: description,
  ogTitle: 'Nuxt Starter',
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
