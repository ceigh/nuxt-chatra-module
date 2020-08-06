import path from 'path'

export default function () {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: { id: this.options.chatra.id }
  })
}

module.exports.meta = require('../package.json')
