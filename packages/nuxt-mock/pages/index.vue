<template>
  <div>
    <h1>Nuxt Chatra module</h1>
    <ul>
      <li>
        Simple method
        <button @click="openChat">
          Open chat
        </button>
      </li>
      <li>
        Method with payload
        <button @click="setChatWidth">
          Set chat width
        </button>
        <input
          v-model.number="chatWidth"
          type="range"
          min="100"
          max="1000"
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chatWidth: 500
    }
  },

  methods: {
    openChat () {
      this.$chatra.methods.openChat()
    },
    setChatWidth () {
      this.$chatra.methods.setChatWidth(this.chatWidth)
    }
  }
}
</script>
