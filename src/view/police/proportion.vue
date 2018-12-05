<template>
  <div>
    <echart-change-trend class="echart-change-trend"></echart-change-trend>
  </div>
</template>

<script>
import EchartChangeTrend from '@/components/echarts/EchartChangeTrend';
export default {
  name: 'PoliceProportion',
  components: {
    EchartChangeTrend
  }
}
</script>

<style scoped>
.echart-change-trend{
  padding:10px;
}
</style>
