<template>
  <div>
    <tabs :tabs="tabs"></tabs>
    <router-view />
    <div class="t-map">
      <div class="t-map__title">
        数据动态展示
      </div>
      <echart-china-map-flow class="echart-china-map-flow"></echart-china-map-flow>
    </div>
  </div>
</template>

<script>
import tabs from '@/components/public/tabs';
import EchartChinaMapFlow from '@/components/echarts/EchartChinaMapFlow';
export default {
  name: 'TrendIndex',
  components: {
    tabs,
    EchartChinaMapFlow
  },
  data(){
    return {
      tabs: [
        {
          name: '每日客流数据',
          link: '/trend/everyday'
        },
        {
          name: '客流时空统计',
          link: '/trend/hourflow'
        },
        {
          name: '客运站数据',
          link: '/trend/transport'
        }
      ]
    }
  }
}
</script>

<style scoped>
.t-map{
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;  
  background-color: #fff;
}
.t-map__title{
  padding:0 10px;
  height: 45px;
  line-height: 45px;
  font-weight: 700;
  color: #666;
  border-bottom:1px solid #f2f2f2;
}
.echart-china-map-flow{
  padding:10px;
}
</style>
