<template>
  <div class="nav">
    <v-app-bar color="#333" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-show="!drawer" class="nav__title">
        Bairline
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img
        v-show="!drawer"
        class="nav__image"
        src="@/assets/logo/Logo_Bairline_new.png"
        alt
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      overlay-opacity="0.5"
      dark
    >
      <template v-slot:prepend>
        <img
          class="nav__drawer__image"
          src="@/assets/logo/Logo_Bairline_new.png"
          alt
        />
      </template>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <router-link to="/home" color="primary">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link :to="{ name: 'fleet' }">
            <v-list-item>
              <v-list-item-title>Fleet</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/aircraft-management">
            <v-list-item>
              <v-list-item-title>Aircraft Management</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link :to="{ name: 'gallery' }">
            <v-list-item>
              <v-list-item-title>Gallery</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/contact">
            <v-list-item>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </router-link>

          <transition name="fade">
            <v-list-item v-if="user.loggedIn" @click="logout()">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </transition>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
  data: () => ({
    drawer: false,
    group: null
  }),
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
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
  width: 100vw;

  &__image {
    height: 100%;
  }

  &__drawer {
    &__image {
      width: 90%;
    }
  }
}
</style>
