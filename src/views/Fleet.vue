<template>
  <div class="fleet">
    <transition name="slide-fade" mode="out-in">
      <img
        class="fleet__image"
        :src="fleet.image"
        :key="fleet.label"
        data-toggle="tooltip"
        data-placement="bottom"
        alt="Bairline"
      />
    </transition>
    <div class="fleet__button">
      <router-link :to="{ name: 'fleet' }">Fleet</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "fleet",
  data: function() {
    return {
      fleets: [
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
      fleet: {
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
        if (index >= this.fleets.length) {
          index = 0;
        }
        this.fleet = this.fleets[index++];
      }.bind(this),
      5000
    );
  }
};
</script>
<style lang="less" scoped>
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(0%);
  opacity: 0.6;
}
.fleet {
  position: relative;
  &__image {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 0 100%;
    filter: brightness(50%);
  }

  &__button {
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