<template>
  <div class="banner">
    <img :src="pathBanner" class="banner_img" alt="banner of the site">
    <div class="description">
      <h2>Let Your Home Be Unique</h2>
      <p class="subtitle">
        There are many variations of the passages of
        lorem Ipsum fromavailable, majority.
      </p>
      <button type="button" class="start_btn"><span>Get Started <img :src="pathArrow" class="btn_arrow" alt="arrow"></span></button>
    </div>
  </div>
  <div class="projects_header">
    <h2 class="projects_title">Follow Our Projectsv</h2>
    <p class="projects_subtitle">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
  </div>
  <ProjectsGridComp />
  <CounterComponent />
  <ArticleComponent />
</template>

<script>
import ProjectsGridComp from "@/components/ProjectsGridComp";
import CounterComponent from "@/components/common/CounterComponent";
import ArticleComponent from "@/components/ArticleComponent";
export default {
  name: "HomePage",
  components: {ArticleComponent, CounterComponent, ProjectsGridComp},
  data(){
    return {
      pathBanner: require("@/assets/img/banner.jpg"),
      pathArrow: require("@/assets/img/arrow.png")
    }
  }
}
</script>

<style scoped>
.banner {
  width: 1200px;
  position: relative;
  margin: 0 auto 96px;
}

.banner_img {
  width: 1200px;
  height: 758px;
}

.description {
  position: absolute;
  top: 150px;
  left: 52px;
  width: 434px;
  height: 342px;
}

.description h2 {
  margin-bottom: 18px;
  font-family: Verdana sans-serif;
  font-size: 65px;
  font-weight: 400;
  line-height: 81px;
  text-align: left;
}

.subtitle {
  margin-bottom: 21px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}

.start_btn {
  padding: 26px 49px;
  background: #292F36;
}

.start_btn span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 124px;
  height: 24px;
  font-family: Verdana sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  color: white;
}

.btn_arrow {
  width: 15px;
  height: 13px;
}.banner {
   width: 1200px;
   position: relative;
   margin: 0 auto 96px;
 }

.banner_img {
  width: 1200px;
  height: 758px;
}

.description {
  position: absolute;
  top: 150px;
  left: 52px;
  width: 434px;
  height: 342px;
}

.description h2 {
  margin-bottom: 18px;
  font-family: Verdana sans-serif;
  font-size: 65px;
  font-weight: 400;
  line-height: 81px;
  text-align: left;
}

.subtitle {
  margin-bottom: 21px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}

.start_btn {
  padding: 26px 49px;
  background: #292F36;
}

.start_btn span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 124px;
  height: 24px;
  font-family: Verdana sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  color: white;
}

.btn_arrow {
  width: 15px;
  height: 13px;
}

/*styles of title and subtitle*/
.projects_header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 93px;
}

.projects_title {
  margin-bottom: 8px;
  font-family: Verdana sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: center;
}

.projects_subtitle {
  width: 737px;
  height: 66px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
}
</style>