# Etapa 1: Base y dependencias
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Etapa 2: Construcción (Build)
FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

# Etapa 3: Servidor de producción (Next.js)
FROM base AS production-stage
WORKDIR /app

ENV NODE_ENV production

# Copiamos solo los archivos necesarios para producción
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

# Comando para ejecutar el servidor standalone de Next.js
CMD ["node", "server.js"]