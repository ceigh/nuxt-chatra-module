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
let isFallback = true

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { debug } = options

const log = (title, value = '\n') => {
  if (!debug) return
  const fallback = isFallback ? 'fallback' : 'normal'

  const r = '3px'
  const pill = (color, pos) => `
    background: ${color};
    padding: 0 ${r};
    font-weight: bold;
    ${pos ? `border-top-${pos}-radius: ${r};` : ''}
    ${pos ? `border-bottom-${pos}-radius: ${r};` : ''}
  `

  const css1 = pill('#493669', 'left')
  const css2 = `${pill(isFallback ? '#fb4a46' : '#3ba553')}; color: #000`
  const css3 = pill('#3c5d86', 'right')

  console.log(`%cchatra%c${fallback}%c${title}`, css1, css2, css3, value)
}

log('options', options)

const generate = (names = Object.keys(window.Chatra), isFallback = false) => {
  const excluded = ['showChat', 'hideChat', 'closeChat', 'collapseChat', 'expandChat']

  const filtered = names.filter(name => !(name[0] === '_' || name in excluded))
  log('names', filtered)

  const entries = filtered.map(name => {
    /* to pass all arguments to Chatra function
     * transpiled to support old browsers, minified
     */
    const args = 'for(var l=arguments.length,a=new Array(l),k=0;k<l;k++){a[k]=arguments[k]}'
    const payload = isFallback ? ''
      : `${args}var w;(w=window).Chatra.apply(w,['${name}'].concat(a))`

    // eslint-disable-next-line no-new-func
    const func = new Function(`return function ${name}(){${payload}}`)()
    // log(`function - ${name}`, func.toString())
    return [name, func]
  })
  log('entries', entries)

  const obj = Object.fromEntries(entries)
  log('object', obj)

  return obj
}

log('loaded')
Vue.prototype.$chatra = {
  ...options,
  methods: generate(fallbackMethods, true)
}

window.ChatraID = options.id
window.ChatraSetup = options.setup

const script = document.createElement('script')
script.addEventListener('load', () => {
  isFallback = false
  log('loaded')
  Vue.prototype.$chatra.methods = generate()
})
script.async = true
script.src = 'https://call.chatra.io/chatra.js'
document.head.appendChild(script)
