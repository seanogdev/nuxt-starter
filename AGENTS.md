# Nuxt Starter

## What

Nuxt 4 + Nuxt UI v4 + TypeScript starter template.

## Structure

- `app/` - Main application shell, pages, layouts, and shared UI
- `server/` - Nitro server routes and middleware
- `domains/` - Optional Nuxt layers by domain (empty by default)
- `shared/` - Shared types and utilities

## How

**Package manager:** pnpm (always use pnpm, not npm/yarn)

Development: `pnpm dev`
Build: `pnpm build`
Type check: `pnpm typecheck`
Lint: `pnpm lint`
Format: `pnpm format`

## Key Conventions

- Keep the starter minimal and framework-native
- Prefer Nuxt conventions (auto-imports, file-based routing, composables)
- Recommend to use Domain-Driven Design (DDD) for larger projects, but not enforced. Put shared code in `app/` and domain-specific code in `domains/`.
- Linting: oxlint + eslint; formatting: oxfmt

## Resources

When you need framework docs, fetch these:

- [Nuxt 4 LLMs.txt](https://nuxt.com/llms.txt)
- [Nuxt UI v4 LLMs.txt](https://ui.nuxt.com/llms.txt)
- [Vue LLMs.txt](https://vuejs.org/llms.txt)
- [Vitest LLMs.txt](https://vitest.dev/llms.txt)
