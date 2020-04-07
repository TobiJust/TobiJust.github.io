<template>
  <v-row class="gallery">
    <v-col cols="12" sm="12">
      <v-container fluid>
        <h1 class="gallery__headline">Gallery</h1>
        <hr class="gallery__divider" />
        <transition-group name="list" tag="div" class="row">
          <v-col
            v-for="(n, index) in images"
            :key="n.path"
            class="d-flex child-flex"
            cols="4"
          >
            <!-- <v-hover v-slot:default="{ hover }"> -->
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              :width="'100%'"
              max-width="600"
            >
              <v-img :aspect-ratio="16 / 9" :src="n.url.i">
                <!-- <v-expand-transition>
                    <div
                      v-if="hover"
                      class="card-overlay"
                      style="height: 100%; left: 0"
                    >
                      Citation X
                    </div>
                  </v-expand-transition> -->
              </v-img>
            </v-card>
            <!-- </v-hover> -->

            <span v-if="user.loggedIn" @click="deleteItem(n.path, index)">
              <div class="gallery__item__delete">
                <v-icon>mdi-delete</v-icon>
              </div>
            </span>
          </v-col>
          <v-col
            v-if="user.loggedIn"
            :key="images.length"
            class="d-flex child-flex"
            cols="4"
          >
            <v-card
              class="mx-auto gallery__upload"
              color="#999"
              max-width="'100%'"
            >
              <div
                class="gallery__upload__icon__wrapper"
                @click="selectFiles()"
                v-ripple="{ center: true }"
              >
                <v-icon color="white" x-large class="gallery__upload__icon"
                  >mdi-plus</v-icon
                >
              </div>
              <v-card-text v-show="files.length > 0">
                <input
                  style="display: none;"
                  multiple
                  type="file"
                  ref="galleryFileUpload"
                  @change="processFile($event)"
                />
                <template v-for="(file, index) in files">
                  <v-chip v-if="index < 2" :key="index" class="ma-2">
                    {{ file.name }} ({{ formatBytes(file.size) }})
                  </v-chip>
                  <span
                    v-else-if="index === 2"
                    :key="index"
                    class="overline grey--text text--darken-3 mx-2"
                  >
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
                <p>
                  {{ files.length }} files ({{ formatBytes(totalFileBytes) }} in
                  total)
                </p>
              </v-card-text>
              <v-card-actions
                v-if="files.length > 0"
                class="gallery__upload__button__wrapper"
              >
                <button
                  class="gallery__upload__button"
                  @click.stop="uploadAll()"
                >
                  Upload
                </button>
              </v-card-actions>
            </v-card>
          </v-col>
        </transition-group>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import StorageService from '@/services/StorageService.js'

export default {
  name: 'Intro',
  data: () => {
    return {
      files: []
    }
  },
  mounted() {
    StorageService.getGalleryImages()
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
      images: 'galleryImages'
    }),
    totalFileBytes() {
      return Object.values(this.files)
        .map(file => file.size)
        .reduce((a, b) => a + b, 0)
    }
  },
  methods: {
    uploadAll() {
      StorageService.uploadAll(this.files)
      this.files = []
    },
    deleteItem: function(path, index) {
      StorageService.deleteItem(path, index)
    },
    selectFiles: function() {
      this.$refs.galleryFileUpload.click()
    },
    processFile(event) {
      this.files = event.target.files
    },
    formatBytes(a, b) {
      if (0 == a) return '0 Bytes'
      var c = 1024,
        d = b || 1,
        e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        f = Math.floor(Math.log(a) / Math.log(c))
      return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
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
  &__item__delete {
    position: absolute;
    top: 20px;
    right: 20px;

    :hover::before {
      transform: scale(1.2);
    }
    ::before {
      cursor: pointer;
      color: grey;
      display: block;
      background-color: lightgray;
      padding: 5px;
      border-radius: 100%;
      transform: scale(1);
      transition: transform 175ms cubic-bezier(0.4, 0.25, 0.3, 1);
    }
  }
  &__upload {
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    &__icon {
      top: 50%;
      margin-top: -20px;
      &__wrapper {
        height: 100%;
        border: 5px dashed grey;
        flex: 1;

        &:hover {
          cursor: pointer;
        }
      }
    }

    &__button {
      padding: 15px;
      background: gray;
      border-radius: 5px;

      &:hover {
        background: var(--v-secondary-base);
        color: white;
      }
      &__wrapper {
        justify-content: center;
      }
    }
  }
}
.child-flex {
  position: relative;
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
