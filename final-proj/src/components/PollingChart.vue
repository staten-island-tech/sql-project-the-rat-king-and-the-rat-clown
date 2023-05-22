<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    v-for="labels in chartdata"
    :key="labels"
  />
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
      Prop: {
        chartData: Object,
        chartOptions: Object
      }
    }
  }
}
</script>
