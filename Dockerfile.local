FROM node:16-alpine

RUN apk add git

WORKDIR /app/

COPY . .

RUN npm install

RUN npm run prepare

ENTRYPOINT ["tail"]
CMD [ "-f", "/dev/null" ]