<template>
  <div class="plane">
    <div class="plane__container">
      <v-skeleton-loader
        :loading="!plane.coverImage"
        transition="scale-transition"
        type="image"
      >
        <div style="position: relative;">
          <img class="plane__image" :src="plane.coverImage" alt="" />
          <h1 class="plane__headline" style>{{ plane.name }}</h1>
        </div>
      </v-skeleton-loader>
      <h2 class="headline">Our most flexible plane</h2>
      <hr class="plane__divider" />
      <a
        v-if="plane.tourUrl"
        class="plane__link"
        :href="plane.tourUrl"
        target="_blank"
        rel="noopener noreferrer"
        >360° Tour <v-icon medium>mdi-open-in-new</v-icon></a
      >
      <div class="plane__floorplan" v-if="plane.floorplan">
        <img class="plane__floorplan__image" :src="plane.floorplan" alt="" />
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
        <h2 class="headline">Range maps</h2>
        <img class="plane__range__image" :src="plane.rangeMap" alt="" />
      </div>
      <div class="plane__download__wrapper" v-if="plane.factSheet">
        <h2 class="headline">Download the technical specification</h2>
        <span class="plane__download">
          <a :href="plane.factSheet" target="_blank" rel="noopener noreferrer">
            Fact Sheet <v-icon>mdi-download</v-icon>
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
                >
                </v-carousel-item> </v-carousel
            ></v-col>
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
  methods: {}
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
    color: gray;

    &:hover {
      color: var(--v-primary-base);
      i {
        color: var(--v-primary-base);
      }
    }
  }

  &__image {
    left: 0;
    max-height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 25% 10%;
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
    a {
      color: gray;
    }
    &:hover {
      i,
      a {
        color: var(--v-primary-base);
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
</style>
