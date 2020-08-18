<template>
  <div>
    <h1>Nuxt Chatra module test site</h1>
    <button v-for='m in chatra'
      :key='m.name'
      @click='m'>{{ m.name }}</button>
  </div>
</template>

<script>
  export default {
    computed: {
      chatra () {
        const { $chatra } = this
        return {
          ...$chatra,
          // pass modified methods with payload
        }
      }
    }
  }
</script>
