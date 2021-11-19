FROM node:16.13

WORKDIR /app/

COPY . .

RUN npm install