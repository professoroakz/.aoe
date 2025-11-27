FROM node:20-alpine

WORKDIR /app

# Copy application files
COPY . .

# Set the entry point
CMD ["node", "index.js"]
