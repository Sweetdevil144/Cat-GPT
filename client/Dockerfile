# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# Add app
COPY . ./

# Start app
CMD ["npm", "start"]

# Expose the port the app runs on
EXPOSE 3000
