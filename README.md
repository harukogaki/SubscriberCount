[![Netlify Status](https://api.netlify.com/api/v1/badges/0ef3796e-576c-4436-b330-5c2cfadb4f28/deploy-status)](https://app.netlify.com/sites/youtubesubscribercount/deploys)

# Subscriber Count

## Dotenv vs Netlify
Make sure to exclude `.env` before committing any changes. This file is not meant to be pushed but for added convenience in local development samples have been pushed.
```
git update-index --asume-unchanged .env
```

If you want to add new samples, make sure to add the appropriate environment variables in netlify, and push changes forcefully
```
git add -f .env
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
