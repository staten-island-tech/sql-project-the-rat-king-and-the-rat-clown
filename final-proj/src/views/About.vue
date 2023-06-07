<template>
  <div v-if="userSession.session">
    <form @submit.prevent="createPoll">
    <input v-model="pollTitle" placeholder="Title">
    <input v-model="choice1" placeholder="First Choice">
    <input v-model="choice2" placeholder="Second choice">
    <button>Create Poll</button>    
  </form>
  <ul>
    <li v-for="poll in polls">{{ poll.title }} <button @click="deletePoll(poll)">Delete</button></li>
  </ul>
  </div>
  <div v-else>
    Please log in to continue. 
  </div>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue'
const polls = ref([])
const userSession = userSessionStore()
console.log(userSession)
let pollTitle = ''
let choice1 = ''
let choice2 = ''
async function getPolls() {
  let { data } = await supabase.from('polls').select('*')
  polls.value = data
}
async function createPoll(){
  const { data, error } = await supabase
  .from('polls')
  .insert([
    { title: pollTitle, choice1: choice1, choice1value: 0, choice2: choice2, choice2value: 0 },
  ])
  getPolls()
}
async function deletePoll(poll){
const { data, error } = await supabase
  .from('polls')
  .delete()
  .eq('id', poll.id)
  getPolls()
}
onMounted(() => {
  getPolls()
})
</script>

<style lang="scss" scoped>

</style>
