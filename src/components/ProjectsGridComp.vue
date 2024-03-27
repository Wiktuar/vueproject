<template>
  <div class="projects_grid">
    <div v-for="item in projectsGrid" :key="item.id" class="projects_grid_item">
      <img :src="item.imgPath" alt="Modern Kitchan">
      <div class="project_footer">
        <div>
          <p class="photo_name">{{ item.header }}</p>
          <p class="category">{{item.category}}</p>
        </div>
        <img :src="arrow" alt="view all project">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ProjectsGridComp",
  data(){
    return {
      arrow: require("@/assets/img/arrow.png")
    }
  },

  computed: {
    ...mapState(["projectsGrid"])
  }
}
</script>

<style scoped>
/*projects grid*/
.projects_grid {
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 525px);
  grid-template-rows: repeat(2, 645px);
  grid-column-gap: 100px;
  grid-row-gap: 58px;
  margin: 0 auto 96px;
}

.photo_name {
  margin-top: 24px;
  margin-bottom: 4px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292F36;
}

.category {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}

.project_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>