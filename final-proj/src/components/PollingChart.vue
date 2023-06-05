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
      chartData: {
        labels: [],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      let data = await supabase.from('countries').select('name')
      let num = await supabase.from('countries').select('num')
      let num2 = Object.values(num)
      let data2 = Object.values(data)
      data2[1].forEach((x) => this.chartData.labels.push(x.name))
      num2[1].forEach((x) => this.chartData.datasets[0].data.push(x.num))
      this.loaded = true
    } catch (error) {}
  }
}
</script>
