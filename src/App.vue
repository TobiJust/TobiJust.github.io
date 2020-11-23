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
</style>
