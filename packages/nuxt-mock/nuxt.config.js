require('dotenv').config()

export default {
  target: 'static',
  ssr: false,
  chatra: {
    id: process.env.CHATRA_ID,
    debug: true
  },
  modules: ['nuxt-chatra-module']
}
