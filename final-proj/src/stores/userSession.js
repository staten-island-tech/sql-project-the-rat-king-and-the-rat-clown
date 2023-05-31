import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: ref()
  })
})
