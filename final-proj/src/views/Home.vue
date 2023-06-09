<template>
  <div v-if="userSession.session">
  </div>
  <div v-else>Please log in to vote.</div>
  <ul>
    <li v-for="poll in polls">
      <h2>{{ poll.title }}, posted by {{ poll.creator }}</h2>
      <h3>{{ poll.choice1 }}, {{ poll.choice1value }} 
        <button @click="voteChoice1(poll)">Vote</button>
      </h3>
      <h3>{{ poll.choice2 }}, {{ poll.choice2value }}
        <button @click="voteChoice2(poll)">Vote</button>
      </h3>
    </li>
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
async function voteChoice1(poll){
const { data, error } = await supabase
  .from('polls')
  .update({ choice1value: poll.choice1value++ })
  .eq('id', poll.id)
getPolls()
const { data2, error2 } = await supabase
  .from('polls')
  .update({ choice1value: poll.choice1value++ })
  .eq('id', poll.id)
getPolls()
}
async function voteChoice2(poll){
const { data, error } = await supabase
  .from('polls')
  .update({ choice2value: poll.choice2value++ })
  .eq('id', poll.id)
getPolls()
const { data2, error2 } = await supabase
  .from('polls')
  .update({ choice2value: poll.choice2value++ })
  .eq('id', poll.id)
getPolls()
}

async function getPolls() {
  let { data } = await supabase.from('polls').select('*')
  console.log(data)
  polls.value = data
}
</script>

<style lang="scss" scoped>

</style>