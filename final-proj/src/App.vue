<template>
  <nav>
        <RouterLink to="/home">Polls</RouterLink>
        <RouterLink to="/post">Post</RouterLink>
        <RouterLink to="/">Account</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { userSessionStore } from './stores/userSession.js'
import { supabase } from './supabase'
import { onMounted, ref, toRefs } from 'vue'
import BarChart from './components/PollingChart.vue'
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
  console.log(userSession)
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('*')
  prof.value = data
}
</script>



<style></style>
