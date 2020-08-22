<template>
  <div>
    <h1>Nuxt Chatra module</h1>
    <button @click='openChat'>Open chat</button>
  </div>
</template>

<script>
export default {
  computed: {
    chatra() {
      return this.$chatra
    }
  },

  methods: {
    openChat() {
      this.$chatra.methods.openChat()
    }
  }
}
</script>
