<template>
  <div class="article_banner">
    <img :src="articleBanner" alt="blog banner">
  </div>
  <main>
    <div class="article_content">
      <h1>Let’s Get Solution for Building Construction Work</h1>
      <img :src="img1" alt="fiirst image" class="post_img">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus deserunt dignissimos eius facere pariatur placeat quas repudiandae saepe, tempore. Autem corporis cumque est iste iusto modi numquam omnis pariatur sunt! Blanditiis ducimus, exercitationem illum magni, mollitia perferendis, perspiciatis reiciendis sed sint suscipit tempora tenetur voluptas. Temporibus?</p>
      <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
      <div class="quote">
        <img :src="bigQuote" alt="quote">
        <p class="quote_text">The details are not the details. They make the design.</p>
      </div>
      <h1>Design sprints are great</h1>
      <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
      <ol>
        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
      </ol>
      <img :src="img2" class="post_img" alt="post image">
      <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div>
    <div class="sidebar">
      <h2>Tags</h2>
      <p v-for="item in tags" :key="item.id" @click="changeActive" class="tag">
        {{ item }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "BlogDetailsComp",
  data(){
    return {
      articleBanner: require("@/assets/img/singleArticle/articleBanner.jpg"),
      img1: require("@/assets/img/singleArticle/img1.jpg"),
      img2: require("@/assets/img/singleArticle/img2.jpg"),
      bigQuote: require("@/assets/img/singleArticle/quotes.png"),
      tags: this.$store.state.tags,
    }
  },

  methods: {
     changeActive(e){
       const tags = document.querySelectorAll(".tag");
       tags.forEach(t => t.classList.remove("active"));
       e.target.classList.add("active");
     }
  },

  mounted(){
     const tag = document.querySelector(".tag");
     tag.classList.add("active");
  }
}
</script>

<style scoped>
/*content of article and tags sidebar*/
main {
  display: flex;
  gap: 50px;
  width: 1200px;
  margin: 0 auto 96px;
}

.article_content {
  width: 805px;
}

.article_content h1 {
  margin-bottom: 25px;
  font-family: Verdana sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
}

.post_img {
  width: 805px;
  border-radius: 50px;
  margin-bottom: 46px;
}

p {
  margin-bottom: 15px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  text-align: justify;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ;
  width: 805px;
  height: 270px;
  padding-left: 227px;
  padding-right: 227px;
  background: #F4F0EC;
}

.quote_text {;
  font-family: Verdana sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  color: #CDA274;
}

/*sidebar*/
.sidebar {
  width: 345px;
}

.sidebar h2{
  margin-bottom: 24px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
}

.tag {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 1em 2em;
  font-family: Verdana sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: #292F36;
  background-color: #F4F0EC;
}

.tag.active {
  background: #292F36;
  color: #FFFFFF;
}
</style>