import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LogPage from '../views/LogPage.vue'
import { userSessionStore } from '../stores/userSession'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: About
    },
    {
      path: '/',
      name: 'account',
      component: LogPage
    }
  ]
})

export default router
