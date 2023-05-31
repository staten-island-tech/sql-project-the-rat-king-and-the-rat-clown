<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="userSession.session" :session="userSession.session" />
    <Auth v-else />
  </div>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue'
import Account from '../components/Account.vue'
import Auth from '../components/Auth.vue'
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

<style lang="scss" scoped>

</style>