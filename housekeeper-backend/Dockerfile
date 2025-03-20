# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the API port
EXPOSE 3002

# Run the app
CMD ["npm", "run", "start:dev"]

