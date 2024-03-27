<template>
  <div class="counter">
    <div class="counter_container">
      <div v-for="item in counter" :key="item.id" class="counter_item">
        <p class="count"> {{ item.count }}</p>
        <p class="count_description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "CounterComponent",

  computed: {
    ...mapState(["counter"])
  }
}
</script>

<style scoped>
/*styles of counter*/
.counter {
  background-color: #F4F0EC;
}

.counter_container {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 151px 60px;
  margin: 0 auto 96px;
}

.count {
  font-family: Verdana sans-serif;
  font-size: 85px;
  font-weight: 400;
  line-height: 106px;
  letter-spacing: 0.02em;
  text-align: center;
  color:  #CDA274;
}

.count_description {
  font-family: Verdana sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
}
</style>