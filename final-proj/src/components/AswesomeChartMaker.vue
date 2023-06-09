<template>
  <div>
    <Bar v-if="loaded" ></Bar>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { supabase } from '../supabase'
export default {
  name: 'chartcreator',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{ data: [] }]
      },
      results: [{ choice: [], num: [] }]
    }
  },

  props: ['labels', 'data'],

  async mounted() {
    try {
      let choice1 = await supabase.from('polls').select('choice1')
      let yes = await supabase.from('polls').select('choice1value')
      choice1.data.forEach((x) => this.chartData.labels.push(x))
      yes.data.forEach((x) => this.chartData.datasets[0].data.push(x))
      console.log(this.chartData)
    } catch (error) {
      console.log('error')
    }
  }
}
</script>

<style lang="scss" scoped></style>
