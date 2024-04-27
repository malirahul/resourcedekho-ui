# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React application
# RUN npm run build

# Expose a port for the application to run on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
