require('dotenv').config()

export default {
  chatra: {
    id: process.env.CHATRA_ID,
    setup: {
      colors: {
        buttonText: '#f600a5',
        buttonBg: '#fff'
      }
    }
  },
  modules: ['nuxt-chatra-module'],
  plugins: ['~/plugins/example.client'],
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'nuxt-chatra-module']
  }
}
