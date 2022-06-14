FROM node:16-alpine as builder
ARG APP_ENV
ENV REACT_APP_UNSPLASH ${APP_ENV}
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
ENV REACT_APP_UNSPLASH $UNSPLASH_CLIENT_ID
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]