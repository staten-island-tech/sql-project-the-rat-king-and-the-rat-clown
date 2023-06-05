<template>
  <Bar id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
</template>

<script>
import { onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { supabase } from '../supabase'
export default {
  name: 'chartcreator',
  components: { Bar },
  Data() {
    return {
      loaded: false,
      chartdata: {
        label: [],
        dataset: [{ data: [] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    let title = await supabase.from('polls').select('title')
  }
}
</script>

<style lang="scss" scoped></style>
