<template>
  <ul>
    <li v-for="profile in prof">{{ profile }}</li>
  </ul>
  <BarChart />
</template>

<script>
import { supabase } from './supabase'
import { onMounted, ref } from 'vue'
import BarChart from './components/PollingChart.vue'
export default {
  name: 'App',
  components: { BarChart }
}

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
