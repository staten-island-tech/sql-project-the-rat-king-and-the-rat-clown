<template>
  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
  </nav>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { userSessionStore } from './stores/userSession.js'
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
const prof = ref([])
const userSession = userSessionStore()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    userSession.session = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    userSession.session = _session
  })
  yes()
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('username')
  prof.value = data
}
</script>

<style></style>
