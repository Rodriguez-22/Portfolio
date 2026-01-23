# Fase de construcción
FROM node:22-alpine AS builder
WORKDIR /app

# Copiamos archivos de dependencias desde el contexto (raíz)
COPY package*.json ./
RUN npm install

# Copiamos todo el código fuente
COPY . .

# Construimos la app de Next.js
RUN npm run build

# Fase de ejecución
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]