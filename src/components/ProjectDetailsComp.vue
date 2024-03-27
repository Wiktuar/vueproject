<template>
  <main>
    <div class="swiper mySwiper">
      <div class="text">
        <h3>Minimal Look Bedrooms</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
          <br>
          <br>
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img :src="sliderImg" alt="slider"></div>
        <div class="swiper-slide"><img :src="sliderImg" alt="slider"></div>
        <div class="swiper-slide"><img :src="sliderImg" alt="slider"></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectDetailsComp",
  data(){
    return {
      sliderImg: require("@/assets/img/projectDetails.jpg")
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
  margin: 0 auto 200px;
}

/*slider styles*/
.swiper {
  width: 1200px;
  border: 1px solid #EAEAEA;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: #F7F7F7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 1200px;
  height: 724px;
  object-fit: cover;
}

/*styles pf text*/

.text {
  width: 660px;
  margin: 0 auto 100px;
}

h3 {
  margin-bottom: 11px;
  font-family: Verdana sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 62px;
}

p {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}
</style>