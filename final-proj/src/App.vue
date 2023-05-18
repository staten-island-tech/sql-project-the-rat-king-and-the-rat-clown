<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <input v-model="label" placeholder="Ex: Jan,Feb,Mar" />
  <button @click="make">Create Chart</button>
</template>

<script setup>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
import BarChart from './components/PollingChart.vue'
const prof = ref([])

onMounted(() => {
  yes()
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('username')
  prof.value = data
}
</script>

<script>
export default {
  name: 'App',
  components: { BarChart },
  methods: {
    make() {}
  }
}
</script>

<style></style>
