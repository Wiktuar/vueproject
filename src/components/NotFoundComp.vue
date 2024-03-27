<template>
  <main>
    <div>
      <h1>404</h1>
      <div class="subtitle">
        We are sorry, but the page you requested was not found
      </div>
      <router-link to="/home" class="back_to_home">Back To Home<img :src="arrow" alt="back to nome"></router-link>
    </div>
    <img :src="photo" class="notfound_img" alt="not found">
  </main>
</template>

<script>
export default {
  name: "NotFoundComp",
  data(){
    return {
      arrow: require("@/assets/img/notfound/backArrow.jpg"),
      photo: require("@/assets/img/notfound/notfound.jpg"),
    }
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto 200px;
}

h1 {
  font-family: Verdana sans-serif;
  font-size: 250px;
  font-weight: 400;
  line-height: 312px;
  text-align: left;
  color: #CDA274;
}

.subtitle {
  margin-bottom: 50px;
  font-family: Verdana sans-serif;
  font-size: 35px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0.01em;
  text-align: left;
}

.back_to_home    {
  width: 253px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #292F36;
  color: #FFFFFF;
}

.notfound_img {
  width: 713px;
  border-radius: 0 0 0 200px;
}
</style>