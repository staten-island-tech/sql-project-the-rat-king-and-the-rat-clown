<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';

export default {
  name:"chartcreator",
  extends: Bar,
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.renderChart({
      labels: this.data.map(item => item.label),
      datasets: [
        {
          label: 'Bar Chart',
          backgroundColor: 'blue',
          data: this.data.map(item => item.value),
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped></style>
