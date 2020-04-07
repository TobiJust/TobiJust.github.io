<template>
  <v-app>
    <div id="app">
      <Header></Header>
      <div class="main">
        <transition name="component-fade" mode="out-in">
          <router-view />
        </transition>
      </div>
      <Contact v-if="$route.name !== 'contact'"></Contact>
      <Footer></Footer>
    </div>
  </v-app>
</template>
<script>
import Contact from '@/components/Contact.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Contact,
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import (css)
  url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap');

body {
  margin: 0;
}
.main {
  // background-image: url('~@/assets/logo/Logo.png');
  background-position: center center;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.component-fade-enter-active {
  transition: all 1s ease;
}
.component-fade-leave-active {
  transition: all 1s ease 0.2s;
}
.component-fade-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.component-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
