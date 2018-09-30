FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./dist ./
COPY ./server.js ./
RUN mkdir dist
RUN mv mercado-libre-udea/ dist/
EXPOSE 8080
CMD [ "npm", "start" ]