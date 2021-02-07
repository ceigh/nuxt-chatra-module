import Vue from 'vue'

const { vueInjectOnly, pluginOptions } =
  JSON.parse('<%= JSON.stringify(options) %>')

function dbgMsg (msg) {
  if (pluginOptions.debug) console.debug('nuxt-chatra-module:', msg)
}

function getMethods () {
  const names = Object.keys(window.Chatra)
  dbgMsg({ names })

  const entries = names.map(name => {
    /* to pass all arguments to Chatra function
     * transpiled to support old browsers, minified
     */
    const args = 'for(var l=arguments.length,a=new Array(l),k=0;k<l;k++){a[k]=arguments[k]}'
    const payload = `${args}var w;(w=window).Chatra.apply(w,['${name}'].concat(a))`

    // eslint-disable-next-line no-new-func
    const func = new Function(`return function ${name}(){${payload}}`)()
    // log(`function - ${name}`, func.toString())
    return [name, func]
  })
  dbgMsg({ entries })

  const obj = Object.fromEntries(entries)
  dbgMsg({ obj })

  return obj
}

function getPlugin () {
  return {
    ...pluginOptions,
    methods: getMethods()
  }
}

function doInject (nuxtInject, plugin) {
  if (vueInjectOnly) {
    Vue.prototype.$chatra = plugin
  } else {
    nuxtInject('chatra', plugin)
  }
  dbgMsg('injected')
}

function loadScript (cb) {
  window.ChatraID = pluginOptions.id
  window.ChatraSetup = pluginOptions.setup
  const script = document.createElement('script')
  script.addEventListener('load', cb)
  script.async = true
  script.src = 'https://call.chatra.io/chatra.js'
  document.head.appendChild(script)
}

dbgMsg({ vueInjectOnly })
dbgMsg({ pluginOptions })

export default function (_, inject) {
  loadScript(() => {
    dbgMsg('loaded')
    doInject(inject, getPlugin())
  })
}
