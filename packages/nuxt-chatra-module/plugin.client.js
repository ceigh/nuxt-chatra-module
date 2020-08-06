import Vue from 'vue'

const options = JSON.parse('<%= JSON.stringify(options) %>')
if (options.debug) console.log('Chatra options: ', options)

// https://app.chatra.io/settings/integrations/widget
const [d, w, c] = [document, window, 'Chatra']
w.ChatraID = options.id
w.ChatraSetup = options.setup
var s = d.createElement('script')
w[c] = w[c] || function () {
  (w[c].q = w[c].q || []).push(arguments)
}
s.async = true
s.src = 'https://call.chatra.io/chatra.js'
if (d.head) d.head.appendChild(s)

Vue.prototype.$chatra = {
  openChat () {
    window.Chatra('openChat', true)
  }
  // TODO: other methods from
  // https://chatra.com/help/api/#methods
}
