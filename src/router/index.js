import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/mtc',
    name: 'Home',
    component: Home
  },
  {
    path: '/ctm',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tsp',
    name: 'TspLinks',
    component: () => import('../components/TspLinks.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
