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
              Not available yet!
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

        <v-container
          class="fleet__content__item__headline"
          :class="{ 'not-available': fleet.notAvailable }"
        >
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
      planes: planes
    }
  },
  created: function() {},
  components: {}
}
</script>
<style lang="less" scoped>
@import '../assets/less/structure';

.fleet {
  height: 100%;
  width: 100%;
  position: relative;

  @media @medium {
    height: 100vh;
  }

  background: var(--v-secondary-darken1);
  &__content {
    display: flex;
    flex-direction: column;

    @media @medium {
      flex-direction: row;
    }

    &__item {
      position: relative;
      flex: 1;
      height: 100%;

      &__image {
        left: 0;
        height: 100%;
        max-height: 100vh;
        width: 100%;
        object-fit: cover;
        object-position: 30% 100%;
        filter: brightness(50%) blur(1px) grayscale(0.8);
        transition: filter 1s ease;

        @media @medium {
          height: 100vh;
        }

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
        width: 100%;
        left: 0;
        right: 0;
        margin: auto;
        top: 50px;
        color: white;
        font-size: 1.8em;

        &.not-available {
          transform: scale(0.7);
          color: lightgray;
        }
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
