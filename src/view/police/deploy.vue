<template>
  <div>
    <echart-police-forces class="echart-police-forces"></echart-police-forces>
  </div>
</template>

<script>
import EchartPoliceForces from '@/components/echarts/EchartPoliceForces';
export default {
  name:'PoliceDeploy',
  components:{
    EchartPoliceForces
  }
}
</script>

<style scoped>
.echart-police-forces{
  padding:10px;
}
</style>
