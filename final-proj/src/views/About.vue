<template>
  <div v-if="userSession.session">
    <form @submit.prevent="createPoll">
    <input v-model="pollTitle" placeholder="Title">
    <input v-model="choice1" placeholder="First Choice">
    <input v-model="choice2" placeholder="Second choice">
    <button>Create Poll</button>    
  </form>
  </div>
  <div v-else>
    Please log in to continue. 
  </div>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue'
const userSession = userSessionStore()
const pollTitle = ''
const choice1 = ''
const choice2 = ''
async function createPoll(){
  const { data, error } = await supabase
  .from('polls')
  .insert([
    { title: pollTitle, choice1: choice1, choice1value: 0, choice2: choice2, choice2value: 0 },
  ])
}
</script>

<style lang="scss" scoped>

</style>
