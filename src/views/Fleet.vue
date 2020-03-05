<template>
  <div>
    <div class="fleet">
      <img
        v-for="fleet in fleets"
        :key="fleet.label"
        class="fleet__image"
        :class="{ 'fleet__image--active': fleet.active }"
        :src="fleet.image"
        data-toggle="tooltip"
        data-placement="bottom"
        alt="Bairline"
      />
    </div>

    <v-container>
      <v-row dense>
        <v-col cols="4" :key="1">
          <v-card color="#385F73" dark :elevation="20">
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" :key="2">
          <v-card color="#1F7087" dark :elevation="20">
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="fleet__content">
      <vue-typer
        class="fleet__button"
        text="asd"
        :erase-on-complete="false"
        :repeat="1"
        erase-style="clear"
        :pre-type-delay="1000"
        :type-delay="70"
        caret-animation="smooth"
      ></vue-typer>
    </div>
  </div>
</template>
<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'fleet',
  data: function() {
    return {
      fleets: [
        {
          image: require(`@/assets/plane/SLT_0826-Bearbeitet.jpg`),
          label: 'Citation X',
          route: 'fleet',
          active: true
        },
        {
          image: require(`@/assets/plane/SLT_0809-Bearbeitet.jpg`),
          label: 'Plane 2',
          route: 'fleet',
          active: false
        }
      ]
    }
  },
  created: function() {
    let index = 0
    setInterval(
      function() {
        if (index >= this.fleets.length) {
          index = 0
        }
        for (let i = 0; i < this.fleets.length; i++) {
          this.fleets[i].active = index === i
        }
        index++
      }.bind(this),
      5000
    )
  },
  components: {
    VueTyper
  }
}
</script>
<style lang="less" scoped>
.fleet,
.fleet__content {
  height: 100vh;
  width: 100%;
  position: relative;

  &__image {
    position: absolute;
    left: 0;
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

  &__button {
    position: absolute;
    height: 45px;
    left: 10%;
    top: 70vh;
    padding: 0 15px;
    color: white;
    font-size: 1.8em;
  }

  &__text {
    width: 200px;
    position: absolute;
    right: 10%;
    top: 30vh;
  }
}

.vue-typer span.char.custom.typed {
  color: #009688;
}
.cards-item {
  display: inline-block;
  margin-right: 10px;
}
.cards-enter-active,
.cards-leave-active {
  transition: all 1s;
}
.cards-enter, .cards-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
