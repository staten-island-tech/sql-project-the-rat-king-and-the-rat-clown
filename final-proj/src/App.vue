<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <button @click="make">Create Chart</button>\
  <div>
    <BarChart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
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
  data() {
    return {
      chartData: {
        labels: ['yes', 'no', 'yess'],
        datasets: [{ data: [1, 2, 3] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style></style>
