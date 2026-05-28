# Use Node 18 for compatibility with Gatsby v2 and OpenSSL
FROM node:18-bullseye AS builder

WORKDIR /app

# Copy package files and install dependencies first for better build caching
COPY package.json package-lock.json* ./
RUN npm install

# Copy the project and build the Gatsby site
COPY . ./
RUN npm run build

# Production image
FROM node:18-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

EXPOSE 8000
CMD ["npx", "gatsby", "serve", "-H", "0.0.0.0", "-p", "8000"]
