<template>
  <div class="project_banner">
    <img :src="bannerPath" alt="project banner">
    <div class="project_banner_header">
      <h2>Our Project</h2>
      <p class="bread_crumbs">Home / Project</p>
    </div>
  </div>
  <div class="category_buttons">
    <button v-for="btn in buttons" :key="btn" @click="filterProjects(btn)" class="category_btn">{{ btn }}</button>
  </div>
  <div class="project_grid">
    <div v-for="item in allProjects" :key="item.id" class="grid_item">
      <img :src="item.imgPath" alt="project image">
      <div class="project_prev_footer">
        <div class="subscribe">
          <p class="title">{{ item.title }}</p>
          <p class="category">{{item.subtitle}}</p>
        </div>
        <div class="full_view">
          <router-link to="/projectdetails"><img :src="nextArrow" alt="full view"></router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button class="pag_btn">01</button>
    <button class="pag_btn">02</button>
    <button class="pag_btn">03</button>
    <button class="pag_btn"><img :src="naxtArrow" alt="next arrow"> </button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ProjectsComponent",
  data(){
    return {
      bannerPath: require("@/assets/img/project/projectBanner.jpg"),
      buttons: ['Bathroom', 'Bed room', 'Kitchen', 'Living area'],
      naxtArrow: require("@/assets/img/project/nextArrow.png"),
      allProjects: this.$store.state.allProjects
    }
  },

  methods: {
    filterProjects(btn){
       return this.$store.getters.getFilteredProjects(btn);
    }
  },

  computed: {
    ...mapGetters(["getAllProjects"]),
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 1920px;
  margin: 0 auto;
  background: #FFFFFF;
}

/*banner of the project page*/
.project_banner {
  width: 1900px;
  margin: 0 auto 200px;
  position: relative;
}

.project_banner img {
  width: 1900px;
}

.project_banner_header {
  width: 503px;
  height: 178px;
  position: absolute;
  top: 178px;
  left: 708px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 41px 78px;
  background-color: white;
  border-radius: 37px 37px 0 0;
}

.project_banner_header h2 {
  font-family: Verdana sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
}

.bread_crumbs {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}

/*category buttons*/
.category_buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.category_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 219px;
  height: 75px;
  padding: 2em 3em;
  gap: 10px;
  border-radius: 18px;
  font-family: Verdana sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  border: 1px solid #CDA274
}

.category_btn.pressed {
  background: #CDA274;
}

/*projects grid*/
.project_grid {
  display: grid;
  grid-template-columns: repeat(2, 585px);
  gap: 30px;
  justify-content: center;
  margin-bottom: 60px;
}

.project_prev_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
}

.title {
  margin-bottom: 4px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: bold;
  line-height: 31px
}

.subtitle {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
}

.full_view {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #F4F0EC;
}

/*pagination*/
.pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 200px;
}

.pag_btn {
  padding: 23px;
  font-family: Verdana sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #292F36;
  border-radius: 50%;
}
</style>