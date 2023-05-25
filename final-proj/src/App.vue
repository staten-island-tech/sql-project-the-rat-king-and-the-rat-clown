<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <div>
    <BarChart />
  </div>
</template>

<script setup>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
import BarChart from './components/PollingChart.vue'
const prof = ref([])
let temp = []
onMounted(() => {
  yes()
})

const yes = async function () {
  let { data } = await supabase.from('profiles').select('username')
  prof.value = data
  temp.push(data)
  console.log(temp)
}
</script>

<script>
export default {
  name: 'App',
  components: { BarChart }
}
</script>

<style></style>
