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
    component: () =>
      import(/* webpackChunkName: "fleet" */ '../views/Fleet.vue')
  },
  {
    path: '/fleet/:id',
    name: 'plane',
    props: true,
    component: () =>
      import(/* webpackChunkName: "plane" */ '../components/Plane.vue')
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
      import(/* webpackChunkName: "gallery" */ '../components/Gallery.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../components/Contact.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../components/Admin.vue')
  },
  {
    path: '/admin/password',
    name: 'change-password',
    component: () =>
      import(
        /* webpackChunkName: "admin-change-password" */ '../components/AdminChangePassword.vue'
      )
  },
  {
    // will match everything
    path: '*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
