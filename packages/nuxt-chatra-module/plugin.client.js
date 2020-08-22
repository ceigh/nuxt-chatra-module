import Vue from 'vue'

const fallbackMethods = [
  'setIntegrationData', 'updateIntegrationData', 'pageView',
  'setChatWidth', 'setButtonSize', 'setChatHeight',
  'setZIndex', 'setButtonPosition', 'resetButtonPosition',
  'setColors', 'resetColors', 'setLocale',
  'openChat', 'expandWidget', 'minimizeWidget',
  'hide', 'show', 'setGroupId',
  'sendAutoMessage', 'restart', 'kill'
]

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { debug } = options
if (debug) console.log('Chatra options: ', options)

const generate = (names = Object.keys(window.Chatra), isFallback = false) => {
  const excluded = ['showChat', 'hideChat', 'closeChat', 'collapseChat', 'expandChat']

  const filtered = names.filter(name => !(name[0] === '_' || name in excluded))
  if (debug) console.log('Chatra method names: ', filtered)

  const entries = filtered.map(name => {
    const args = isFallback ? '' : '...args'
    const payload = isFallback ? '' : `window.Chatra('${name}', ...args)`
    // eslint-disable-next-line no-new-func
    const func = new Function(`return function ${name}(${args}) { ${payload} }`)()
    return [name, func]
  })
  if (debug) console.log('Chatra method entries: ', entries)

  const obj = Object.fromEntries(entries)
  if (debug) console.log('Chatra method object: ', obj)

  return obj
}

Vue.prototype.$chatra = {
  ...options,
  methods: generate(fallbackMethods, true)
}

window.ChatraID = options.id
window.ChatraSetup = options.setup

const script = document.createElement('script')
script.addEventListener('load', () => {
  if (debug) console.log('Chatra loaded')
  Vue.prototype.$chatra.methods = generate()
})
script.async = true
script.src = 'https://call.chatra.io/chatra.js'
document.head.appendChild(script)
