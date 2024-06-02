# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# Add app
COPY . ./

# Start app
CMD ["yarn", "start"]

# Expose the port the app runs on
EXPOSE 3000
