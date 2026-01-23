# Etapa 1: Instalación de dependencias y construcción
FROM node:22-alpine AS builder
WORKDIR /app

# Copiar archivos de configuración de paquetes
COPY package.json package-lock.json* pnpm-lock.yaml* ./ 

# Instalar dependencias según los archivos encontrados
RUN npm install

# Copiar todo el código fuente del proyecto
COPY . .

# Construir la aplicación (esto genera la carpeta .next)
RUN npm run build

# Etapa 2: Imagen de ejecución (más pequeña)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copiar solo lo necesario de la etapa anterior
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Next.js corre por defecto en el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor de producción
CMD ["npm", "start"]