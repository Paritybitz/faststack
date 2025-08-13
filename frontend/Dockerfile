# --- frontend build ---
    FROM node:20-alpine AS build
    WORKDIR /app
    COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
    RUN npm ci || npm i
    COPY . .
    RUN npm run build
    
    # --- serve with Next standalone output ---
    FROM node:20-alpine AS run
    WORKDIR /app
    ENV NODE_ENV=production
    COPY --from=build /app/.next/standalone ./ 
    COPY --from=build /app/.next/static ./.next/static
    COPY --from=build /app/public ./public
    # expose NEXT_PUBLIC_BACKEND_URL at runtime via env if needed
    EXPOSE 3000
    CMD ["node", "server.js"]
    