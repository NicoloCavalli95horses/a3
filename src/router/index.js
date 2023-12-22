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
      path: '/pdf',
      name: 'pdf',
      component: () => import('../views/Config.vue')
    }
  ]
})

export default router
