<template>
  <div class="t-hour">
    <echart-hour-flow></echart-hour-flow>
  </div>
</template>

<script>
import EchartHourFlow from '@/components/echarts/EchartHourFlow';
export default {
  name: 'trendHour',
  components: {
    EchartHourFlow
  }
}
</script>

<style scoped>
.t-hour{
  padding:10px;
  background-color:#fff;
}
</style>
