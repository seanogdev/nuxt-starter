# Multi-stage build for Nuxt 4 application
FROM node:22-alpine AS base

WORKDIR /app

# Copy package.json to enable corepack with specified version
COPY package.json ./
RUN corepack enable

# Build stage
FROM base AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM base AS runner

WORKDIR /app

# Set to production
ENV NODE_ENV=production

# Copy built application from builder
COPY --from=builder /app/.output /app/.output

# Expose port (Nuxt default is 3000)
EXPOSE 3000

# Set host to 0.0.0.0 to allow external access
ENV HOST=0.0.0.0
ENV PORT=3000

# Run the application
CMD ["node", ".output/server/index.mjs"]
