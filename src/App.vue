<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        <img class="nav__image" src="@/assets/logo/Logo_small.png" alt />
      </router-link>
      <router-link to="/" color="primary">Home</router-link>
      <router-link to="/fleet">Fleet</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <a class="nav__mail" href="/contact">
        <v-icon>mdi-email</v-icon>
      </a>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="contact">
      <Contact></Contact>
    </div>
  </div>
</template>
<script>
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact
  }
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap");

body {
  margin: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #333;
  width: 100vw;
  top: 0;
  display: grid;
  grid-template-columns: 15% max-content max-content max-content max-content auto;
  align-items: center;
  z-index: 1;
  height: 10vh;

  &__image {
    width: 100%;
  }

  & a {
    font-weight: bold;
    color: #2c3e50;
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 0 16px;
    text-decoration: none;
  }

  & a:hover:not(.active) {
    color: var(--v-primary-base);
  }

  & a.router-link-exact-active {
    color: var(--v-primary-base);
  }
  &__mail {
    position: fixed;
    top: 2vh;
    right: 3.75rem;
    transform: translateX(50%);
    z-index: 2;

    :hover::before {
      transform: scale(1.2);
    }
    ::before {
      content: "";
      cursor: pointer;
      color: white;
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--v-primary-base);
      padding: 10px;
      border-radius: 100%;
      transform: scale(1);
      transition: transform 175ms cubic-bezier(0.4, 0.25, 0.3, 1);
    }
  }
}
.main,
.contact {
}
</style>
