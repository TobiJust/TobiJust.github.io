<template>
  <div class="home">
    <section class="cover">
      <v-parallax
        height="100%"
        class="cover__wrapper"
        src="@/assets/web/SLT_0785-Bearbeitet.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <img
              class="cover__logo"
              src="@/assets/logo/Logo_Bairline_new.png"
              alt=""
            />
            <div v-scroll-to="'#element'" class="home__cover__button">
              <span>Explore</span>
              <div>
                <v-icon large color="white">mdi-chevron-down</v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
      <!-- <div class="cover__wrapper">
        <img
          class="home__cover__image"
          src="@/assets/web/SLT_0785-Bearbeitet.jpg"
          data-toggle="tooltip"
          data-placement="bottom"
          alt="Bairline"
        />
        <img
          class="cover__logo"
          src="@/assets/logo/Logo_Bairline_new.png"
          alt=""
        />
        <div v-scroll-to="'#element'" class="home__cover__button">
          <span>Explore</span>
          <div>
            <v-icon large color="white">mdi-chevron-down</v-icon>
          </div>
        </div>
      </div> -->
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
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
@import '../assets/less/structure';
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  z-index: 2;
}
img {
  transform: none !important;
  width: 310px !important;
}
section {
  @media @medium {
    position: relative;
    display: flex;
  }

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
      height: 100vh !important;
      position: relative;
      display: grid;
      grid-template-columns: 10% repeat(3, minmax(5rem, 1fr)) 10%;
      grid-template-rows: 1fr 1fr 1fr;

      // @media @medium {
      //   height: 90vh;
      // }

      img {
        width: 500px;
      }
    }
    &__logo {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 2;
      -o-object-fit: cover;
      object-fit: cover;
      max-height: 100%;
      max-width: 75vw;
      align-self: center;
      justify-self: center;
      z-index: 1;
    }
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
      filter: brightness(30%);
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
      margin: auto;
      bottom: 5%;
      color: white;
      display: inline-block;
      font-weight: bolder;
      font-size: 1.2em;
      cursor: pointer;

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

.v-parallax__image-container {
  left: 100% !important;
  filter: brightness(0.5) !important;
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
