<template>
  <div class="home">
    <section class="cover">
      <div class="cover__wrapper">
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
          image: require(`@/assets/web/SLT_0785-Bearbeitet.jpg`),
          label: 'Fleet',
          route: 'fleet',
          active: true
        },
        {
          image: require(`@/assets/web/SLT_0779-Bearbeitet.jpg`),
          label: 'Aircraft Management',
          route: 'aircraft-management',
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
@import '../assets/less/structure';

section {
  @media @medium {
    position: relative;
    display: flex;
  }
}
.cover,
.intro {
  height: 100%;
  @media @medium {
    height: 90vh;
  }
}

.cover__wrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
}

.home {
  position: relative;
  &__cover {
    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
      bottom: 10%;

      @media @mobile {
        left: 0;
        right: 0;
      }

      a {
        font-size: 1.8em;
        color: white;
        text-decoration: none;
        position: relative;
        z-index: 2;
        padding: 10px 40px;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;

        @media @mobile {
          font-size: 1em;
        }

        &:hover {
          padding-right: 20px;
          opacity: 0.9;
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
    padding: 10vh 0;
    width: 100vw;
  }
}
</style>
