FROM node:16.13

WORKDIR /app/

COPY package*.json ./

RUN npm i

COPY . .