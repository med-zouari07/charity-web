# --- Base image for building the app ---
    FROM node:20-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy dependency files first (better caching)
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy all project files
    COPY . .
    
    # Build the Next.js app (production build)
    RUN npm run build
    
    # --- Final lightweight image for running the app ---
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    # Copy only necessary files from builder
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    
    # Expose the port Next.js runs on
    EXPOSE 3000
    
    # Define environment (production)
    ENV NODE_ENV=production
    
    # Start the app
    CMD ["npm", "start"]
    