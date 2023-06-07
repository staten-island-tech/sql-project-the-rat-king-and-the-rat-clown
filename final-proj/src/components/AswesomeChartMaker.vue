<template>
  <div>
    <Bar v-if="loaded"></Bar>
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
        labels: this.labels,
        datasets: [{ data: this.data }]
      },
      results: [{ choice: [], num: [] }]
    }
  },

  props: ['Array', 'data'],

  async mounted() {
    try {
      let choice1 = await supabase.from('polls').select('choice1')
      console.log(choice1.data)
      choice1.data.forEach((x) => this.results[0].choice.push(x))
      console.log(this.results[0].choice)
    } catch (error) {
      console.log('error')
    }
  }
}
</script>

<style lang="scss" scoped></style>
