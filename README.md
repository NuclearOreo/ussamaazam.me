# My Personal Website using Vue.js

## Docker (NGINX) for production

Build Image

```
docker build -t ussamaazam.me .
```

Run Container

```
docker run -it -p 80:80 -p 443:443 -d --name site --rm ussamaazam.me
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Resources

- [Argon Theme](https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html)
