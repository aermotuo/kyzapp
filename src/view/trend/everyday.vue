<template>
  <div class="t-everyday">
    <echart-everyday-flow></echart-everyday-flow>
  </div>
</template>

<script>
import EchartEverydayFlow from '@/components/echarts/EchartEverydayFlow';
export default {
  name: 'TrendEveryDay',
  components: {
    EchartEverydayFlow
  }
}
</script>

<style scoped>
.t-everyday{
  padding:10px;
  background-color:#fff;
}
</style>
