<template>
  <div v-if="userSession.session">
  </div>
  <div v-else>Please log in to vote.</div>
  <ul>
    <li v-for="poll in polls">{{ poll.title }}</li>
    </ul>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue'
import Account from '../components/Account.vue'
import Auth from '../components/Auth.vue'
const polls = ref([])
const userSession = userSessionStore()

onMounted(() => {
  getPolls()
})

async function getPolls() {
  let { data } = await supabase.from('polls').select('*')
  console.log(data)
  polls.value = data
}
</script>

<style lang="scss" scoped>

</style>