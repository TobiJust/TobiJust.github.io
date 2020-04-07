import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    gallery: {
      images: []
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    galleryImages(state) {
      return state.gallery.images
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    },
    SET_GALLERY_IMAGES(state, value) {
      state.gallery.images = value
    },
    ADD_TO_GALLERY(state, value) {
      state.gallery.images.push(value)
    },
    DELETE_FROM_GALLERY(state, index) {
      state.gallery.images.splice(index, 1)
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        })
      } else {
        commit('SET_USER', null)
      }
    },
    addImageToGallery({ commit }, image) {
      commit('ADD_TO_GALLERY', image)
    },
    setGalleryImages({ commit }, images) {
      commit('SET_GALLERY_IMAGES', images)
    },
    deleteGalleryImage({ commit }, index) {
      commit('DELETE_FROM_GALLERY', index)
    }
  }
})
