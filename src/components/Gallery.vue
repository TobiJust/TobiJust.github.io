<template>
  <v-row class="gallery">
    <v-col cols="12" sm="12">
      <v-container fluid>
        <h1 class="gallery__headline">Gallery</h1>
        <hr class="gallery__divider" />
        <v-row>
          <v-col
            v-for="n in images"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  :aspect-ratio="16 / 9"
                  :src="require(`@/assets/images${n}`)"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="card-overlay"
                      style="height: 100%; left: 0"
                    >
                      Citation X
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Intro',
  data: () => {
    return {
      images: {}
    }
  },
  mounted() {
    this.importAll(require.context('@/assets/images/', true, /\.jpg$/))
  },
  methods: {
    importAll(r) {
      var imgs = {}
      r.keys().forEach(key => {
        return (imgs[key] = key.replace('.', ''))
      })
      this.images = imgs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.gallery {
  &__headline {
    margin-bottom: 25px;
    font-size: 3em;
  }
  &__divider {
    height: 1px;
    color: lightgray;
    width: 50%;
    margin: auto;
    margin-bottom: 15px;
  }
}

.card-overlay {
  background: #333;
  align-items: center;
  display: flex;
  font-size: 1.5em;
  color: white;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  transition: all 0.7s ease;
}
</style>
