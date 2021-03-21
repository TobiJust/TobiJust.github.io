<template>
  <v-app>
    <div id="app">
      <HeaderMobile v-if="$vuetify.breakpoint.mdAndDown"></HeaderMobile>
      <Header v-else></Header>
      <div class="main">
        <transition name="component-fade" mode="out-in">
          <router-view :key="$route.fullPath" />
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
import HeaderMobile from '@/components/HeaderMobile.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Contact,
    Header,
    HeaderMobile,
    Footer
  }
}
</script>

<style lang="less">
@import (css)
  url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&family=Oleo+Script&display=swap');

body {
  margin: 0;
}
.main {
  // background-image: url('~@/assets/logo/Logo.png');
  background-position: center center;
}
#app {
  font-family: 'Montserrat', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
a {
  text-decoration: none;
}
.component-fade-enter-active {
  transition: all 1s ease;
}
.component-fade-leave-active {
  transition: all 1s ease;
}
.component-fade-enter {
  opacity: 0;
}
.component-fade-leave-to {
  opacity: 0;
}

.v-dialog {
  box-shadow: none !important;
}

.element__scroll {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 5vh;
  color: white;
  display: inline-block;
  cursor: pointer;
  transform: scale(1.5);
  animation-delay: 5s;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: scale(2, 2) translateY(0);
  }
  10% {
    transform: scale(2.1, 1.9) translateY(0);
  }
  30% {
    transform: scale(1.9, 2.1) translateY(-20px);
  }
  50% {
    transform: scale(2, 2) translateY(0);
  }
  57% {
    transform: scale(2, 2) translateY(-7px);
  }
  64% {
    transform: scale(2, 2) translateY(0);
  }
  100% {
    transform: scale(2, 2) translateY(0);
  }
}
</style>
