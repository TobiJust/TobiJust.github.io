<template>
  <div class="fleet">
    <div class="fleet__content">
      <div
        class="fleet__content__item"
        v-for="fleet in Object.values(planes)"
        :key="fleet.name"
        @click="
          !fleet.notAvailable
            ? $router.push({ name: 'plane', params: { id: fleet.name } })
            : null
        "
      >
        <v-hover v-slot:default="{ hover }">
          <div>
            <div
              v-if="hover && fleet.notAvailable"
              class="fleet__content__item__overlay"
            >
              Coming soon!
            </div>
            <img
              class="fleet__content__item__image"
              :src="fleet.entryImage"
              data-toggle="tooltip"
              data-placement="bottom"
              alt="Bairline"
            />
          </div>
        </v-hover>

        <v-container class="fleet__content__item__headline">
          <v-row dense>
            <v-col>
              <div>{{ fleet.name }}</div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import planes from '@/assets/planes'

export default {
  name: 'fleet',
  data: function() {
    return {
      planes: planes,
      fleets: [
        {
          image: require(`@/assets/plane/SLT_0826-Bearbeitet.jpg`),
          label: 'Citation X',
          route: { name: 'plane', params: { id: 'Citation X' } }
        },
        {
          image: require(`@/assets/plane/SLT_0809-Bearbeitet.jpg`),
          label: 'Citation CJ2',
          route: { name: 'plane', params: { id: 'Citation CJ 2' } }
        },
        {
          image: require(`@/assets/plane/gulfstream500.jpeg`),
          label: 'Gulfstream 500',
          route: { name: 'plane', params: { id: 'Gulfstream 500' } },
          notAvailable: true
        }
      ]
    }
  },
  created: function() {
    console.log(Object.values(planes))
  },
  components: {}
}
</script>
<style lang="less" scoped>
.fleet {
  height: 100vh;
  width: 100%;
  position: relative;

  background: var(--v-secondary-darken1);
  &__content {
    display: flex;

    &__item {
      position: relative;
      flex: 1;

      &__image {
        left: 0;
        height: 100vh;
        max-height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 25% 100%;
        filter: brightness(50%) blur(1px) grayscale(0.8);
        transition: filter 1s ease;

        &:hover {
          filter: brightness(80%) grayscale(0);
          cursor: pointer;
        }
        &__na {
          filter: brightness(80%) grayscale(0);
        }
      }
      &__overlay {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 50%;
        color: white;
        z-index: 1;
        background: #333;
        width: max-content;
        padding: 15px;
        border-radius: 5px;
      }

      &__headline {
        position: absolute;
        width: max-content;
        left: 0;
        right: 0;
        margin: auto;
        top: 50px;
        color: white;
        font-size: 1.8em;
      }
      &__button {
        position: absolute;
        width: 50%;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 50px;
        padding: 0 15px;
        color: white;
        font-size: 1.8em;
      }
    }

    &__text {
      width: 200px;
      position: absolute;
      right: 10%;
      top: 30vh;
    }
  }
}
.headline {
  justify-content: center;
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
