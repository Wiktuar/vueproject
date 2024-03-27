<template>
  <div>
    <h3>Счетчик</h3>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  name: "CounterComponent",
  computed: {
    ...mapState(["count"])
  },

  methods: {
    ...mapMutations(["increment", "decrement"])
  }
}
</script>

<style scoped>

</style>