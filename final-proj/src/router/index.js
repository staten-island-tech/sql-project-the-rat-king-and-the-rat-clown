import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { userSessionStore } from '../stores/userSession'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        needsAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userSession = userSessionStore()

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})

export default router
