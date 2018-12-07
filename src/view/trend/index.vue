<template>
  <div>
    <tabs :tabs="tabs"></tabs>
    <router-view />
    <div class="t-map">
      <div class="head-row">
        <div class="head-row__title">
          发客数量
        </div>
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
  },
  created(){
    this.$store.commit('updatePage',{
      name: '态势展示',
      index:1
    });
  }
}
</script>

<style scoped>
.t-map{
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;  
  background-color: #fff;
}
.echart-china-map-flow{
  padding:10px;
}
</style>
