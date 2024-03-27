<template>
  <div class="articles">
    <div class="header_block">
      <h2 class="articles_header">Articles & News</h2>
      <p class="articles_subtitle">
        It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
      </p>
    </div>
    <div class="articles_grid">
      <div v-for="item in getFirstFree" :key="item.id" class="articles_item">
        <img :src="item.imgPath" alt="article image">
        <p class="article_category">{{item.category}}</p>
        <h3 class="art_header">
          {{item.summary}}
        </h3>
        <div class="article_footer">
          <p class="date">{{item.date}}</p>
          <button type="button" class="art_footer_btn"><img :src="arrowPath" alt="button arrow"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ArticleComponent",
  data(){
      return {
        arrowPath: require("@/assets/img/articles/Vector.png")
      }
  },

  computed: {
    ...mapGetters(["getFirstFree"])
  }
}
</script>

<style scoped>
/*articles and news*/

.articles {
  width: 1200px;
  margin: 0 auto 100px;
}
.header_block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.articles_header {
  font-family: Verdana sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292F36;
}

.articles_subtitle {
  width: 811px;
  margin-top: 12px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #4D5053;
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