# Etapa 1: Base y configuración de pnpm
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Habilitamos corepack para poder usar pnpm sin instalarlo manualmente
RUN corepack enable

# Etapa 2: Instalación de dependencias
FROM base AS dependencies
WORKDIR /app
# Copiamos solo los archivos de dependencias para aprovechar la caché de Docker
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Etapa 3: Construcción (Build)
FROM base AS build
WORKDIR /app
COPY . .
# Copiamos los node_modules de la etapa anterior
COPY --from=dependencies /app/node_modules ./node_modules
# Construimos la aplicación Next.js
RUN pnpm build

# Etapa 4: Servidor de producción (Next.js)
FROM base AS production-stage
WORKDIR /app

ENV NODE_ENV=production

# Copiamos los archivos necesarios generados en el build
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Next.js corre por defecto en el puerto 3000
EXPOSE 3000

# Comando para arrancar el servidor de producción de Next.js
CMD ["pnpm", "start"]