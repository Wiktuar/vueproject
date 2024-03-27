<template>
  <header>
    <img :src="path" class="logo" alt="Логотип сайта">
    <div class="menu_bar">
      <router-link v-for="item in menuItems" :key="item.id" :to="item.href ">{{item.text}}</router-link>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HeaderComponent",

  computed: {
     ...mapState(['menuItems', 'path'])
  },

  methods: {

  }

}
</script>

<style scoped>
/*styles of header*/
  header {
    width: 1200px;
    height: 150px;
    margin: 0 auto 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 177px;
    height: 50px;
  }

  a {
    text-decoration: none;
  }

  .menu_bar {
    width: 243px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    font-family: Verdana sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
</style>