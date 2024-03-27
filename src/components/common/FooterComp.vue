<template>
  <footer>
    <div class="first">
      <img :src="path" class="footer_logo">
      <p class="losung">It is a long established fact that a reader will be distracted lookings.</p>
      <div class="social_nets">
        <img src="" class="twitter" alt="twitter">
        <img src="" class="inst" alt="instagram">
      </div>
    </div>
    <div class="footer_menu">
      <p class="footer_menu_header">Pages</p>
      <div class="footer_menu_bar">
        <router-link v-for="item in menuItems" :key="item.id" :to="item.href" class="footer_menu_item">
          {{item.text}}
        </router-link>
      </div>
    </div>
    <div class="contact_block">
      <h3>Contact</h3>
      <p class="address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p class="email">contact@interno.com</p>
      <p class="phone_number">(123) 456 - 7890</p>
    </div>
  </footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FooterComp",

  computed: {
    ...mapState(['menuItems', 'path'])
  },

}
</script>

<style>
/*footer*/

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer {
  width: 1200px;
  margin: 0 auto 134px;
  display: flex;
}

.first {
  width: 393px;
  margin-right: 100px;
}

.footer_logo {
  display: inline-block;
  width: 177px;
  margin-bottom: 18px;
}

.losung {
  margin-bottom: 31px;
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
}

.twitter  {
  display: inline-block;
  width: 18px;
  margin-right: 70px;
}

.footer_menu {
  width: 125px;
  margin-right: 101px;
}

.footer_menu_header {
  margin-bottom: 9px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  line-height: 31px;
}

.footer_menu_bar {
  display: flex;
  height: 198px;
  flex-direction: column;
  justify-content: space-evenly;
}

.footer_menu_item {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 66px;
}

.contact_block {
  width: 258px;
}

.contact_block h3 {
  margin-bottom: 26px;
  font-family: Verdana sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
}

.address, .email, .phone_number {
  font-family: Verdana sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
}
</style>