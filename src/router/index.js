import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import ShopCar from '../views/shopcar/ShopCar.vue'
import Main from '../views/main/Main.vue'
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/classify/Classify.vue')
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
