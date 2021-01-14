import '@mdi/font/css/materialdesignicons.css'
import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCZQmk_bftIBEzWImM0_0VZxgtvwXS84iA',
  authDomain: 'bairline-37370.firebaseapp.com',
  databaseURL: 'https://bairline-37370.firebaseio.com',
  projectId: 'bairline-37370',
  storageBucket: 'bairline-37370.appspot.com',
  messagingSenderId: '1098762527571',
  appId: '1:1098762527571:web:eef384254031599876b7a6',
  measurementId: 'G-GYFY1J76ZN'
}

firebase.initializeApp(config)
firebase.analytics()

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
