<template>
  <div class="home">
    <!-- <section>
      <div class="start">
        <img src="@/assets/logo/Logo.png" alt="" />
        <div class="start__info">
          <h3>Business aviation as it's best.</h3>
          <p>
            Offers fast, cost efficient and flexible solutions to your
            individual businesses.
          </p>
        </div>
      </div>
    </section> -->
    <!-- <section class="jumbotron">
      <div class="motion">
        <div class="motion__first">
          <img
            class="motion__clouds"
            src="@/assets/svg/motion.svg"
            alt="CSS motion path nur Chrome, Opera, nicht safari,  firefox"
          />

          <img
            class="motion__image"
            src="@/assets/logo/Logo_cropped.png"
            alt="Bairline"
          />
        </div>
        <div class="motion__second">
          <img
            class="motion__plane"
            src="@/assets/svg/plane.svg"
            alt="CSS plane nur Chrome, Opera, nicht safari,  firefox"
          />
        </div>
      </div>
    </section> -->
    <section class="cover">
      <!-- <div
        class="cover__jumbotron"
        v-for="(slogan, i) in slogans"
        :key="slogan"
        :class="{ 'cover__jumbotron--active': sloganIndex === i }"
        v-bind:style="{ marginTop: 2 * i + 'em' }"
      >
        {{ slogan }}
      </div> -->
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
        <div v-scroll-to="'#element'" class="element__scroll">
          <div>
            <span class="mdil mdil-f13c"></span>
            <v-icon x-large color="white">mdi-chevron-down</v-icon>
          </div>
        </div>
      </div>
    </section>
    <section class="intro" id="element">
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
      sloganIndex: 0,
      slogans: [
        `Business aviation as it's best.`,
        'Charter Operator',
        'Airline'
      ],
      logos: [
        {
          image: require(`@/assets/web/SLT_0785-Bearbeitet.jpg`),
          label: 'Fleet',
          route: 'fleet',
          active: true
        },
        {
          image: require(`@/assets/OEHUB-04-takeoff.jpg`),
          label: 'Aircraft Management',
          route: 'aircraft-management',
          active: false
        },
        {
          image: require(`@/assets/web/SLT_0779-Bearbeitet.jpg`),
          label: 'Gallery',
          route: 'gallery',
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
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
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
    setInterval(
      function() {
        this.sloganIndex++
        if (this.sloganIndex >= this.slogans.length) {
          this.sloganIndex = 0
        }
      }.bind(this),
      3000
    )
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/structure';
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  z-index: 2;
}
section {
  @media @medium {
    position: relative;
    display: flex;
  }

  .jumbotron,
  .cover,
  .intro {
    height: 100%;
    @media @medium {
      max-height: 90vh;
    }
  }

  .cover {
    &__wrapper {
      width: 100%;
      height: 95vh;
      position: relative;
      display: grid;
      grid-template-columns: 10% repeat(3, minmax(5rem, 1fr)) 10%;
      grid-template-rows: 2fr 1fr 1fr;

      @media @medium {
        height: 90vh;
      }
    }
    &__logo {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
      -o-object-fit: cover;
      object-fit: cover;
      height: 200%;
      align-self: center;
      justify-self: center;
      z-index: 1;
    }
  }
}
.cover__jumbotron {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 20%;
  z-index: 1;
  font-size: 2em;
  font-weight: lighter;
  color: white;
  opacity: 0;
  transition: opacity 2.5s ease;

  &--active {
    opacity: 1;
    transition: opacity 1s ease;
  }
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
      left: 0;
      right: 0;
      bottom: 10%;

      @media @medium {
        left: 10%;
        right: auto;
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
    padding: 5vh 0;
    width: 100vw;

    @media @medium {
      padding: 10vh 0;
    }
  }
}

.motion {
  height: 50%;
  width: 100%;

  &__first,
  &__second {
    height: 50vh;
    position: relative;
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
  }

  &__clouds {
    height: 150%;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  &__plane {
    height: 100%;
    width: 100%;
    background: var(--v-primary-base);
  }
}

.start {
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: 10% repeat(3, minmax(5rem, 1fr)) 10%;
  grid-template-rows: 1fr 2fr 1fr;
  background: rgb(169, 169, 169);
  background: radial-gradient(#525252, #131313;);
  overflow: hidden;
  color: white;

  img {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    -o-object-fit: cover;
    object-fit: cover;
    height: 200%;
    align-self: center;
    justify-self: center;
  }

  &__info {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0 2rem;
    text-align: left;
  }
}
</style>
