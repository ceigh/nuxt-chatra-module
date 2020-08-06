export default function () {
  console.log(this.options.chatra.id) // 12345
}

module.exports.meta = require('../package.json')
