<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
</template>

<script setup>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'

const prof = ref([])

onMounted(() => {
  yes()
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('username')
  prof.value = data
}
</script>

<style></style>
