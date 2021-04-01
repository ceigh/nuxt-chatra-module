<template>
  <div>
    <button @click="openChat">
      Open chat
    </button>
    <button @click="setChatWidth">
      Set chat width
    </button>
    <input
      v-model.number="chatWidth"
      type="range"
      min="100"
      max="1000"
    >
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
      this.$chatra('openChat')
    },
    setChatWidth () {
      this.$chatra('setChatWidth', this.chatWidth)
    }
  }
}
</script>
