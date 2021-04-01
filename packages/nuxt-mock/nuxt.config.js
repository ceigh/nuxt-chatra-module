require('dotenv').config()

export default {
  chatra: {
    id: process.env.CHATRA_ID,
    setup: {
      colors: {
        buttonText: '#f600a5',
        buttonBg: '#fff'
      }
    },
    debug: true
  },
  modules: ['nuxt-chatra-module']
}
