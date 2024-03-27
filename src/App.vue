<template>
  <div id="app">
    <HeaderComponent />
    <RouterView />
    <FooterComp />
  </div>

</template>

<script>
import HeaderComponent from "@/components/common/HeaderComponent";
import FooterComp from "@/components/common/FooterComp";
export default {
  name: 'App',
  components: {
    FooterComp,
    HeaderComponent
  }
}
</script>

<style>
  #app {
    width: 1920px;
    margin: 0 auto;
    background: #ffffff;
  }
</style>
