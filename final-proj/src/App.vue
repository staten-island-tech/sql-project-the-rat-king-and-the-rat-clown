<template>
  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/post">Post</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { userSessionStore } from './stores/userSession.js'
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
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
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('*')
  prof.value = data
}
</script>

<script>
export default {
  name: 'App',
  components: { BarChart },
  data() {
    return {
      chartData: {
        labels: ['yes', 'no', 'yess'],
        datasets: [{ data: [1, 2, 3] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style></style>
