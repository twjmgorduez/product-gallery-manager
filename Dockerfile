FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY src src/
RUN npm run build
RUN rm -R src/

EXPOSE 8080
CMD [ "npm", "run", "serve" ] 