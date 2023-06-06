<template>
  <div></div>
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
    let title = await supabase.from('polls').select('title')
    let title2 = Object.values(title)
    console.log(title2)
  }
}
</script>

<style lang="scss" scoped></style>
