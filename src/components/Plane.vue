<template>
  <div class="plane">
    <v-dialog v-model="dialog" max-width="900" overlay-opacity="0.99">
      <div>
        <v-carousel hide-delimiters v-model="model">
          <v-carousel-item
            v-for="(item, i) in plane.gallery"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>

        <div class="plane__dialog__close" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </div>
      </div>
    </v-dialog>
    <div class="plane__container">
      <v-skeleton-loader
        :loading="!plane.coverImage"
        transition="scale-transition"
        type="image"
      >
        <div style="position: relative;">
          <img class="plane__image" :src="plane.coverImage" alt />
          <h1 class="plane__headline" style>{{ plane.name }}</h1>
        </div>
      </v-skeleton-loader>
      <h2 class="headline">{{ plane.tagline }}</h2>
      <hr class="plane__divider" />
      <p class="plane__content">{{ plane.content }}</p>
      <a
        v-if="plane.tourUrl"
        class="plane__link"
        :href="plane.tourUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Virtual <v-icon medium>mdi-rotate-3d</v-icon> Tour
      </a>
      <div class="plane__floorplan" v-if="plane.floorplan">
        <img
          class="plane__floorplan__image"
          :src="dayNight ? plane.floorplan_night : plane.floorplan"
          alt
        />
        <div class="plane__floorplan__switch" v-if="plane.floorplan_night">
          <v-icon :color="dayNight ? '#ddd' : ''"
            >mdi-white-balance-sunny</v-icon
          >
          <label class="switch">
            <input type="checkbox" v-model="dayNight" />
            <span class="slider round"></span>
          </label>
          <v-icon :color="!dayNight ? '#ddd' : ''">mdi-power-sleep</v-icon>
        </div>
      </div>
      <h2 class="plane__facts__headline">Technical information</h2>
      <hr class="plane__divider" />
      <v-container>
        <v-row dense style="position: relative;">
          <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
            <div class="plane__wrapper">
              <v-timeline dense>
                <v-timeline-item
                  v-for="(item, i) in facts"
                  :key="i"
                  :icon="item.icon"
                  :color="item.color"
                  fill-dot
                >
                  <v-card :color="item.color" dark>
                    <v-card-title class="plane__wrapper__title">
                      {{ plane.facts[item.label] || '' }}
                    </v-card-title>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-col>
          <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
            <div class="plane__wrapper plane__wrapper--reverse">
              <v-timeline dense reverse>
                <v-timeline-item
                  v-for="(item, i) in specs"
                  :key="i"
                  :icon="item.icon"
                  :color="item.color"
                  fill-dot
                >
                  <v-card :color="item.color" dark>
                    <v-card-title class="plane__wrapper__title">
                      {{ plane.specs[item.label] }}
                    </v-card-title>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="plane__range" v-if="plane.rangeMap">
        <h2 class="headline">Range map</h2>
        <img class="plane__range__image" :src="plane.rangeMap" alt />
      </div>
      <div class="plane__download__wrapper" v-if="plane.factSheet">
        <h2 class="headline">Technical Specification Download</h2>
        <span class="plane__download">
          <a :href="plane.factSheet" target="_blank" rel="noopener noreferrer">
            Fact Sheet
            <v-icon>mdi-download</v-icon>
          </a>
        </span>
      </div>
      <div class="plane__gallery" v-if="plane.gallery && plane.gallery.length">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-carousel
                height="400"
                cycle
                hide-delimiters
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(item, i) in plane.gallery"
                  :key="i"
                  :src="item"
                  @click="openDialog(i)"
                  style="cursor: pointer;"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import planes from '@/assets/planes'

export default {
  name: 'Plane',
  props: {
    id: String
  },
  data() {
    return {
      coverImage: '',
      plane: planes[this.id],
      dayNight: false,
      dialog: false,
      model: -1,
      facts: [
        {
          color: 'grey darken-1',
          icon: 'mdi-car-seat',
          label: 'passengers'
        },
        {
          color: 'grey darken-2',
          icon: 'mdi-bag-checked',
          label: 'luggage'
        },
        {
          color: 'grey darken-3',
          icon: 'mdi-wrench',
          label: 'manufactured'
        },
        {
          color: 'grey darken-2',
          icon: 'mdi-speedometer',
          label: 'speed'
        }
      ],

      specs: [
        {
          color: 'grey darken-1',
          icon: 'mdi-arrow-expand-vertical',
          label: 'height'
        },
        {
          color: 'grey darken-2',
          icon: 'mdi-arrow-expand-horizontal',
          label: 'width'
        },
        {
          color: 'grey darken-3',
          icon: 'mdi-arrow-left-right',
          label: 'length'
        },
        {
          color: 'grey darken-2',
          icon: 'mdi-arrow-decision',
          label: 'range'
        }
      ]
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    openDialog(index) {
      this.dialog = true
      this.model = index
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/structure';

.plane {
  height: 100%;
  display: flex;
  position: relative;

  &__container {
    width: 100%;
  }

  &__content {
    margin: 5px 20px 25px 20px;
    line-height: 1.8em;

    @media @tablet {
      margin: 25px 200px 50px 200px;
    }
  }
  &__divider {
    height: 1px;
    color: lightgray;
    width: 50%;
    margin: auto;
    margin-bottom: 15px;
  }

  &__headline {
    position: absolute;
    top: 5%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    color: white;

    @media @mobile {
      font-size: 1.5em;
    }
  }

  &__wrapper {
    @media @tablet {
      margin: 0 25px;
    }
    transform: translateX(-15px);

    &--reverse {
      transform: translateX(15px);
    }

    &__title {
      font-size: 12px;
    }
  }
  &__floorplan {
    &__image {
      margin: 25px 0;
      width: 80%;
    }
  }
  &__range {
    &__image {
      max-width: 100%;
    }
  }
  &__link {
    color: var(--v-primary-base);

    i {
      color: var(--v-primary-base);
      animation: pulse 2s infinite;
    }

    &:hover {
      color: gray;
      i {
        color: gray;
      }
    }
  }

  &__image {
    left: 0;
    max-height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 25% 30%;
    filter: brightness(80%);

    @media @tablet {
      height: 90vh;
    }
  }

  &__facts {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    &__headline {
      margin: 25px 0;
    }
    &__item {
    }
  }

  &__download {
    i,
    a {
      color: var(--v-primary-base);
    }
    &:hover {
      i,
      a {
        color: gray;
        cursor: pointer;
      }
    }
    &__wrapper {
      padding-bottom: 25px;
    }
  }
  &__gallery {
    background: var(--v-secondary-darken1);
    color: white;
    padding: 25px 0;
    width: 100%;
  }

  &__dialog {
    &__close {
      position: fixed;
      top: 2%;
      right: 2%;

      :hover::before {
        background-color: rgba(211, 211, 211, 0.1);
      }
      ::before {
        cursor: pointer;
        color: lightgray;
        display: block;
        padding: 3px;
        border-radius: 100%;
        transform: scale(1.2);
        transition: transform 175ms cubic-bezier(0.4, 0.25, 0.3, 1);
      }
    }
  }
}
.vertical__divider {
  position: absolute;
  width: 1px;
  background: black;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}

h2.headline {
  margin: 25px 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  top: 0px;
  margin: 0 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
}

input:focus + .slider {
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@keyframes pulse {
  0% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }
  70% {
    border-radius: 50%;
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }

  100% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
}
</style>
