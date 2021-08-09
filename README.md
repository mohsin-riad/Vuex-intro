# Documentation

>Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

> vue : ``` 3x ``` 

> vuex : ``` 4x ```

## Build
> install Node Js(v8 engine) | dependency (npm)
* setup: [NOdeJs LTS](https://nodejs.org/en/download/)
``` bash
# select: vue 3, vue router, vuex
vue create vue-intro
```

### Tailwind integration
* setup: [Tailwind-css](https://tailwindcss.com/docs/installation)
``` bash
# Generate tailwind.config.js >full
vue add tailwind 
```

### Api Package configuration [Axios]
``` bash
# individual project integration
npm i axios --save
```
> Add to:  ``` src/main.js ```
``` bash
import axios from 'axios'
```
> used to sent POST and GET request to the server

> Open source api from [RandomNumber](https://random.org/integers)

## Compiles and hot-reloads for development
``` bash
npm run serve
```
