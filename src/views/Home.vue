<template>
  <div class="home">
    <section class="cover">
      <img
        v-for="logo in logos"
        :key="logo.label"
        class="home__cover__image"
        :class="{ 'home__cover__image--active': logo.active }"
        :src="logo.image"
        data-toggle="tooltip"
        data-placement="bottom"
        alt="Bairline"
      />
      <div
        class="home__cover__button"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <router-link :to="{ name: currentLogo.route }">
          {{ currentLogo.label }}
          <v-icon large class="home__cover__button__icon" v-show="hover">
            mdi-airplane-takeoff
          </v-icon>
        </router-link>
      </div>
    </section>
    <section class="intro">
      <Intro></Intro>
    </section>
    <section class="services">
      <Promises></Promises>
    </section>
    <section>
      <div class="fleet">
        <h1 class="fleet__headline">
          {{ $vuetify.lang.t('$vuetify.fleet.headline') }}
        </h1>
        <Fleet></Fleet>
      </div>
    </section>
    <section class="catering"></section>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import Promises from '@/components/Promises'
import Fleet from '@/views/Fleet'

export default {
  name: 'home',
  components: { Intro, Promises, Fleet },
  data: function() {
    return {
      hover: false,
      logos: [
        {
          image: require(`@/assets/web/SLT_0779-Bearbeitet.jpg`),
          label: 'Home',
          route: 'home',
          active: true
        },
        {
          image: require(`@/assets/web/SLT_0785-Bearbeitet.jpg`),
          label: 'Fleet',
          route: 'fleet',
          active: false
        }
      ]
    }
  },
  computed: {
    currentLogo: function() {
      return this.logos.find(logo => logo.active)
    }
  },
  created: function() {
    let index = 0
    setInterval(
      function() {
        if (index >= this.logos.length) {
          index = 0
        }
        for (let i = 0; i < this.logos.length; i++) {
          this.logos[i].active = index === i
        }
        index++
      }.bind(this),
      5000
    )
  }
}
</script>

<style lang="less" scoped>
section {
  position: relative;
  display: flex;
}
.cover,
.intro {
  height: 100vh;
}

.home {
  position: relative;
  &__cover {
    &__image {
      position: absolute;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: 0 100%;
      filter: brightness(50%);
      opacity: 0;
      transition: opacity 2s;

      &--active {
        opacity: 1;
      }
    }

    &__text {
      position: absolute;
      height: 45px;
      right: 10%;
      top: 30vh;
    }

    &__button {
      position: absolute;
      height: 45px;
      left: 10%;
      top: 70vh;

      a {
        font-size: 1.8em;
        color: white;
        text-decoration: none;
        position: relative;
        z-index: 2;
        padding: 10px 40px;
        background: var(--v-primary-base);
        opacity: 0.6;

        &:hover {
          padding-right: 20px;
        }
      }
      &__icon {
        color: white;
      }
    }
  }
}

.fleet {
  background: var(--v-secondary-darken1);
  line-height: 1.8em;
  color: white;

  &__headline {
    margin: 10vh 0;
    width: 100vw;
  }
}
</style>
