import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fleet',
    name: 'fleet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "fleet" */ '../views/Fleet.vue')
  },
  {
    path: '/aircraft-management',
    name: 'aircraft-management',
    component: () =>
      import(
        /* webpackChunkName: "aircraft-management" */ '../views/AircraftManagement.vue'
      )
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../components/Gallery.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../components/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
