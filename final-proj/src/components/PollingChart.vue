<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
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
      chartData: {
        labels: ['yes', 'no', 'yess'],
        datasets: [{ data: [1, 2, 3] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      const get = async function () {
        let { data } = await supabase.from('countries').select('name', 'some number')
      }
    } catch (error) {}
  }
}
</script>
