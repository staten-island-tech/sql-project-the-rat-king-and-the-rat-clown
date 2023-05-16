import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Protected from '../views/Protected.vue'
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
      path: '/protected',
      name: 'protected',
      component: Protected,
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
