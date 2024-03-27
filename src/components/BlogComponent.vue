<template>
  <div class="blog_banner">
    <img :src="bannerPath" alt="blog banner">
    <div class="blog_banner_header">
      <h2>Articles & News</h2>
      <p class="bread_crumbs">Home / Blog</p>
    </div>
  </div>
  <div class="latest_post">
    <h2>Latest Post</h2>
    <div class="post_container">
      <img :src="latestPostImg" class="latest_post_img" alt="latest post">
      <div class="post_content">
        <h3 class="post_header">Low Cost Latest Invented Interior Designing Ideas</h3>
        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
        <div class="post_footer">
          <div class="date">22 December,2022 </div>
          <button type="button" class="art_footer_btn"><img :src="arrowPath" alt="button arrow"></button>
        </div>
      </div>
    </div>
  </div>
  <div class="articles">
    <div class="header_block">
      <h2 class="articles_header">Articles & News</h2>
    </div>
    <div class="articles_grid">
      <div v-for="item in getSixArticles" :key="item.id" class="articles_item">
        <img :src="item.imgPath" alt="article image">
        <p class="article_category"> {{ item.category }}</p>
        <h3 class="art_header">
          {{ item.summary }}
        </h3>
        <div class="article_footer">
          <p class="date">{{ item.date }}</p>
         <router-link to="/blogdetails"><img :src="arrowPath" alt="arrow path"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "BlogComponent",

  data(){
    return {
      bannerPath: require("@/assets/img/blog_banner.jpg"),
      latestPostImg: require("@/assets/img/latestPostImg.png"),
      arrowPath: require("@/assets/img/articles/Vector.png"),
    }
  },

  computed: {
    ...mapGetters(["getSixArticles"])
  }
}
</script>

<style scoped>
/*banner of the blog page*/
.blog_banner {
  width: 1900px;
  margin: 0 auto 200px;
  position: relative;
}

.blog_banner img {
  width: 1900px;
}

.blog_banner_header {
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

.blog_banner_header h2 {
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

/*latest post*/
.latest_post {
  width: 1200px;
  margin: 0 auto 150px;
}

.post_container {
  display: flex;
  padding: 22px;
  gap: 65px;
}

.latest_post_img {
  width: 568px;
  height: 478px;
  border-radius: 50px;
}

.post_content {
  width: 370px;
  padding-top: 52px;
}

.post_header {
  margin-bottom: 22px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
}

.post_content p {
  margin-bottom: 41px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}

.post_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
   font-family: Verdana sans-serif;
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: 0.01em;
   text-align: left;
   color: #4D5053;
 }

.art_footer_btn {
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  color: #F4F0EC;
}

.articles {
  width: 1200px;
  margin: 0 auto 100px;
}

.header_block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.articles_grid {
  display: grid;
  grid-template-columns: repeat(3, 382px);
  grid-column-gap: 27px;
}

.articles_item {
  padding: 21px;
  position: relative;
}

.articles_item:hover {
  background-color: #F4F0EC;
}

.articles_item:hover .art_footer_btn {
  background-color: white;
}

.article_category {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 249px;
  left: 41px;
  width: 129px;
  height: 41px;
  background-color: white;
  font-family: Verdana sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}

.art_header {
  width: 305px;
  margin-top: 21px;
  margin-bottom: 30px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292F36;
}

.article_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-family: Verdana sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}

.art_footer_btn {
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  color: #F4F0EC;
}
</style>