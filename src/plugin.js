import Vue from 'vue'

const options = '<%= options %>'
window.ChatraID = options.id

const script = document.createElement('script')
script.async = true
script.src = `${document.location.protocol}//call.chatra.io/chatra.js`
document.head.appendChild(script)

Vue.prototype.$chatra = {
  openChat () {
    window.Chatra('openChat', true)
  }
}
