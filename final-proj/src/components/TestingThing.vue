<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'

const countries = ref([])

onMounted(() => {
  yes()
})
const yes = async function () {
  let { data: countries, error } = await supabase.from('countries').select('name')
  countries.value = data
}
</script>

<style></style>
