import path from 'path'

export default function () {
  const { ssr, target, chatra } = this.options
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.client.js'),
    options: {
      vueInjectOnly: ssr || target !== 'static',
      pluginOptions: chatra
    }
  })
}

module.exports.meta = require('./package.json')
