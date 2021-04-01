# 💬 nuxt-chatra-module

> Simple [Nuxt.js](https://nuxtjs.org) [Chatra](https://chatra.com) integration.

# Installation

`yarn add nuxt-chatra-module`

Add `chatra` section with options to your nuxt config,
only `id` is required.
Check your id [here](https://app.chatra.io/settings/integrations/widget).

Then add `nuxt-chatra-module` to `modules` section.

You may also need to transpile this module if
you need support for older browsers.

```js
export default {
  chatra: {
    id: 'abcdefghijklmnopq'
  },
  modules: [
    'nuxt-chatra-module'
  ],
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'nuxt-chatra-module']
  }
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
      // …
    }
  }
}
```

To check, what setup options is available go to [api reference](https://chatra.com/help/api/#settings).

# Usage

This module simply injected `window.Chatra` function into nuxt.

You can call chatra methods directly from Vue instances:
```html
<template>
  <button @click='openChat'>Open chat</button>
</template>

<script>
export default {
  methods: {
    openChat () {
      this.$chatra('openChat')
    }
  }
}
</script>
```

You can find other methods [here](https://chatra.com/help/api/#methods).

# Development

This package use [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces).
It's just to separate nuxt testing dev space and our module.

```shell
git clone git@github.com:ceigh/nuxt-chatra-module.git
cd nuxt-chatra-module && yarn
# provide chatra id and start nuxt dev server
# you can check your id here
# https://app.chatra.io/settings/integrations/widget
CHATRA_ID=abcdefghijklmnopq yarn dev
# or add CHATRA_ID to packages/nuxt-mock/.env (see .env.example)
```
