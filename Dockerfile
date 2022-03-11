FROM node:16-alpine

RUN apk add git

WORKDIR /app/

COPY package*.json ./

RUN npm i

COPY . .
