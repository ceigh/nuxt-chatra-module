<template>
  <div>
    <h1>Nuxt Chatra module</h1>
    <button @click='load'>Load</button>

    <div v-if='chatra'>
      <button v-for='(m, i) in chatra'
        :key='i'
        @click='m'>{{ m.name }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chatra: null
      }
    },

    methods: {
      load() {
        const c = this.$chatra
        this.chatra = {
          ...c,
          // override to pass arguments
          setButtonPosition: () => c.setButtonPosition('bl')
        }
      }
    }
  }
</script>
