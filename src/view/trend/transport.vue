<template>
  <div class="t-transport">
    <echart-transport-flow></echart-transport-flow>
  </div>
</template>

<script>
import EchartTransportFlow from '@/components/echarts/EchartTransportFlow';
export default {
  name: 'trendTransport',
  components: {
    EchartTransportFlow
  }
}
</script>

<style scoped>
.t-transport{
  padding:10px;
  background-color:#fff;
}
</style>
