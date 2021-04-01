const opts = JSON.parse('<%= JSON.stringify(options) %>')

export default function (_, inject) {
  window.ChatraID = opts.id
  window.ChatraSetup = opts.setup
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://call.chatra.io/chatra.js'
  document.head.appendChild(script)

  inject('chatra', (...args) => window.Chatra(...args))
}
