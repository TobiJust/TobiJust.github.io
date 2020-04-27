<template>
  <div class="nav">
    <router-link to="/">
      <img class="nav__image" src="@/assets/logo/Logo_small.png" alt />
    </router-link>
    <router-link to="/home" color="primary">Home</router-link>
    <router-link :to="{ name: 'fleet' }">Fleet</router-link>
    <router-link to="/aircraft-management">Aircraft Management</router-link>
    <router-link :to="{ name: 'gallery' }">Gallery</router-link>
    <router-link to="/contact">Contact</router-link>
    <transition name="fade">
      <div v-if="user.loggedIn" @click="logout()" class="nav__logout">
        Logout
      </div>
    </transition>
    <span>
      <router-link to="/contact" class="nav__mail">
        <v-icon>mdi-email</v-icon>
      </router-link>
    </span>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.$router.replace({ name: 'home' })
        })
        .catch(function(error) {
          // An error happened.
        })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/structure';

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
  min-height: 5vh;

  @media @medium {
    min-height: 10vh;
  }

  &__image {
    width: 100%;
  }
  &__logout {
    width: max-content;
    color: white;
    font-weight: bold;
    justify-self: flex-end;
    margin-right: 7rem;

    &:hover {
      color: var(--v-primary-base);
      cursor: pointer;
    }
  }

  & a {
    font-weight: bold;
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

  & a.router-link-exact-active,
  & a.router-link-active {
    color: var(--v-primary-base);
  }
  &__mail {
    position: fixed;
    top: 1vh;
    right: 3.75rem;
    transform: translateX(50%);
    z-index: 2;

    @media @medium {
      top: 2vh;
    }

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

.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s ease 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
