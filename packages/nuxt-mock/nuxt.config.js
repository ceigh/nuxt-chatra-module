require('dotenv').config()

export default {
  chatra: {
    id: process.env.CHATRA_ID,
    debug: true
  },
  modules: [
    'nuxt-chatra-module'
  ]
}
