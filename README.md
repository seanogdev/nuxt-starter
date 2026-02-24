# Nuxt Starter

A clean Nuxt 4 starter built with Nuxt UI v4 and TypeScript.

## Setup

### Prerequisites

- Node.js 20+
- pnpm

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
pnpm preview
```

## Tooling

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm format
pnpm knip
```

## Project Structure

```text
app/
  components/
  composables/
  layouts/
  pages/
server/
shared/
domains/
nuxt.config.ts
```

## How to Set Up a Domain

This starter supports domain-style Nuxt layers under `domains/<name>/`.

### 1) Create the domain folder

Create a domain with its own Nuxt config:

```text
domains/
  blog/
    nuxt.config.ts
    pages/
      blog/
        index.vue
```

Example `domains/blog/nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  // Domain-scoped config (components, pages, server routes, etc.)
});
```

### 2) Add the domain to root `nuxt.config.ts`

In `nuxt.config.ts`, add an `extends` array (or append to it):

```ts
export default defineNuxtConfig({
  extends: ['./domains/blog'],
});
```

For multiple domains:

```ts
extends: ['./domains/blog', './domains/account']
```

### 3) Add domain routes/components

Put pages in the domain’s `pages/` directory and Nuxt will register routes automatically.

### 4) Restart dev server

After adding/removing a layer:

```bash
pnpm dev
```

## License

MIT
