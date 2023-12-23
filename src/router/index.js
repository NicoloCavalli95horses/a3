//=======================
// Import
//=======================
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


//=======================
// Consts
//=======================
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/Playground.vue')
    }
  ]
})

export default router
