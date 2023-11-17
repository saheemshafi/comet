## Use Node Slim image
FROM node:20-slim

WORKDIR /comet
## Copy source code
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
## Start the application
CMD ["npm", "run","prod"]
EXPOSE 4000