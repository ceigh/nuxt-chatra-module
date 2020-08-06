import path from 'path'

export default function () {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: this.options.chatra
  })
}

module.exports.meta = require('../package.json')
