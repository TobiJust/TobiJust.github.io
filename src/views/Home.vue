<template>
  <div class="home">
    <section class="cover">
      <transition name="fade" mode="out-in">
        <img
          class="home__cover__image"
          :src="logo.image"
          :key="logo.label"
          data-toggle="tooltip"
          data-placement="bottom"
          alt="Bairline"
        />
      </transition>
      <div class="home__cover__button">
        <router-link :to="{ name: logo.route }">{{ logo.label }}</router-link>
      </div>
    </section>
    <section class="intro">
      <Intro></Intro>
    </section>
    <section class="services">
      <Promises></Promises>
    </section>
    <Fleet></Fleet>
    <section class="catering"></section>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import Promises from "@/components/Promises";
import Fleet from "@/views/Fleet";

export default {
  name: "home",
  components: { Intro, Promises, Fleet },
  data: function() {
    return {
      logos: [
        {
          image: require(`@/assets/web/SLT_0779-Bearbeitet.jpg`),
          label: "Home",
          route: "home"
        },
        {
          image: require(`@/assets/web/SLT_0785-Bearbeitet.jpg`),
          label: "Fleet",
          route: "fleet"
        }
      ],
      logo: {
        image: require(`@/assets/web/SLT_0779-Bearbeitet.jpg`),
        label: "Home",
        route: "home"
      }
    };
  },
  created: function() {
    let index = 0;
    setInterval(
      function() {
        if (index >= this.logos.length) {
          index = 0;
        }
        this.logo = this.logos[index++];
      }.bind(this),
      6000
    );
  }
};
</script>

<style lang="less" scoped>
section {
  display: flex;
}
.cover,
.intro {
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.home {
  position: relative;
  &__cover__image {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 0 100%;
    filter: brightness(50%);
  }

  &__cover__button {
    position: absolute;
    height: 45px;
    left: 10%;
    top: 70vh;
    padding: 0 15px;

    a {
      font-size: 1.8em;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
