<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>

<script setup>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'

const prof = ref([])
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
  yes()
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('username')
  prof.value = data
}
</script>

<style></style>
