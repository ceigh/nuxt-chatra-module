# 💬 nuxt-chatra-module [![npm](https://img.shields.io/npm/v/nuxt-chatra-module)](https://www.npmjs.com/package/nuxt-chatra-module) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/nuxt-chatra-module)](https://www.npmjs.com/package/nuxt-chatra-module)

> Simple [Nuxt.js](https://nuxtjs.org) [Chatra](https://chatra.com) integration.

# Installation

`yarn add nuxt-chatra-module # npm i nuxt-chatra-module`

Add `chatra` section with options to your `nuxt.config.js`,

check all options below, only `id` option is required.

Also you must add `nuxt-chatra-module` to `modules` section:

```js
export default {
  chatra: {
    id: 'abcdefghijklmnopq'
  },
  modules: [
    'nuxt-chatra-module'
  ]
}
```

## Options

To customize your chatra, you must use `setup` option:

```js
// nuxt.config.js
export default {
  chatra: {
    id: 'abcdefghijklmnopq',
    setup: {
      // ...
    }
  }
}
```

To check, what setup options is available go to [api reference](https://chatra.com/help/api/#settings).

# Methods

You can call chatra methods directly from Vue instances, `components/OpenChatBtn.vue`:
```html
<template>
  <button @click='openChat'>Open chat</button>
</template>

<script>
export default {
  methods: {
    openChat () {
      this.$chatra.methods.openChat()
    }
  }
}
</script>
```

All methods are in `this.$chatra.methods` space, to check all supported methods,
go to methods api [reference](https://chatra.com/help/api/#methods).

# Development

This package use [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces).
It's just to separate nuxt testing dev space and our module.

You can make changes by:

```shell
# git clone
cd nuxt-chatra-module
yarn
# provide chatra id and start nuxt dev server
# you can check your id here
# https://app.chatra.io/settings/integrations/widget
CHATRA_ID=abcdefghijklmnopq yarn dev
# change something in packages/nuxt-chatra-module
git commit .
```

# License

MIT.
