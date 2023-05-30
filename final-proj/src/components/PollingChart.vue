<template>
  <Bar id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      temp: [],
      chartData: {
        labels: [],
        datasets: [{ data: [1, 2, 3] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      let { data } = await supabase.from('countries').select('name')
      let data2 = Object.values(data)
      let res = JSON.stringify(data2)
      this.chartData.labels.push(res)
      console.log(this.chartData.labels)
      this.loaded = true
    } catch (error) {}
  }
}
</script>
