import Vue from 'vue'

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { debug } = options

const getMethodObj = () => {
  const excluded = ['showChat', 'hideChat', 'closeChat', 'collapseChat', 'expandChat']

  const names = Object.keys(window.Chatra)
    .filter(name => !(name[0] === '_' || excluded.includes(name)))
  if (debug) console.log('Chatra method names: ', names)

  const entries = names.map(name => {
    // to generate functions with names
    // eslint-disable-next-line no-new-func
    const func = new Function(`return function ${name}(...args) {
      window.Chatra('${name}', ...args)
    }`)()
    return [name, func]
  })
  if (debug) console.log('Chatra method entries: ', entries)

  const obj = Object.fromEntries(entries)
  if (debug) console.log('Chatra method object: ', obj)

  return obj
}

if (debug) console.log('Chatra options: ', options)
window.ChatraID = options.id
window.ChatraSetup = options.setup

const script = document.createElement('script')
script.addEventListener('load', () => {
  Vue.prototype.$chatra = getMethodObj()
})
script.async = true
script.src = 'https://call.chatra.io/chatra.js'

document.head.appendChild(script)
