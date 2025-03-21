FROM node:20

# Create app directory
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose all Expo ports
EXPOSE 8081 19000 19001 19002

# Start in tunnel mode for QR code to work
CMD ["npx", "expo", "start", "--tunnel"]
