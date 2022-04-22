FROM node:16-alpine

RUN apk add git

WORKDIR /app/

COPY . .

RUN npm i

ENTRYPOINT ["tail"]
CMD [ "-f", "/dev/null" ]