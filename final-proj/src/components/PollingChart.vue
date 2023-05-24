<template>
  <Bar id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
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
        datasets: [{ data: [1, 2, 3] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      onMounted(() => {
        getsupabase()
      })

      async function getsupabase() {
        let { data } = await supabase.from('countries').select('name')
        let data2 = Object.values(data)
        this.chartData.labels[0].push(data2.values)
      }
    } catch (error) {}
  }
}
</script>
