<template>
  <div class="nav">
    <router-link to="/">
      <img class="nav__image" src="@/assets/logo/Logo_small.png" alt />
    </router-link>
    <router-link to="/" color="primary">Home</router-link>
    <router-link to="/fleet">Fleet</router-link>
    <router-link to="/aircraft-management">Aircraft Management</router-link>
    <router-link :to="{ name: 'gallery' }">Gallery</router-link>
    <router-link to="/contact">Contact</router-link>
    <span>
      <router-link to="/contact" class="nav__mail">
        <v-icon>mdi-email</v-icon>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.nav {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #333;
  width: 100vw;
  top: 0;
  display: grid;
  grid-template-columns: 15% max-content max-content max-content max-content max-content auto;
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
</style>
