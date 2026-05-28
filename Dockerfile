# ── Build ────────────────────────────────────────────────────────────────────
FROM node:18-bullseye-slim AS builder

WORKDIR /app

# Instala dependências primeiro para aproveitar o cache de camadas do Docker.
# npm ci é mais rápido e garante instalação idêntica ao package-lock.json.
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

# ── Runtime ──────────────────────────────────────────────────────────────────
# nginx:alpine = ~5 MB de imagem base, ~10 MB de RAM em execução.
# Não precisa de Node nem de node_modules para servir arquivos estáticos.
FROM nginx:alpine AS runner

COPY --from=builder /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
