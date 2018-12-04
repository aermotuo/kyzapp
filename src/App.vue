<template>
  <div id="app">
    <!-- <echart-trend></echart-trend>
    <echart-ride-number></echart-ride-number>
    <echart-everyday-flow></echart-everyday-flow>
    <echart-hour-flow></echart-hour-flow>
    <echart-transport-flow></echart-transport-flow>
    <echart-police-forces></echart-police-forces>
    <echart-change-trend></echart-change-trend>
    <echart-china-map-flow></echart-china-map-flow>
    <echart-watch-video></echart-watch-video>
    <echart-watch-bus></echart-watch-bus> -->
    <p-top v-show="showTop"></p-top>
    <router-view />
    <p-footer v-show="showFooter"></p-footer>
  </div>
</template>

<script>
// import EchartRideNumber from './components/echarts/EchartRideNumber';
// import EchartTrend from './components/echarts/EchartTrend';
// import EchartEverydayFlow from './components/echarts/EchartEverydayFlow';
// import EchartHourFlow from './components/echarts/EchartHourFlow';
// import EchartTransportFlow from './components/echarts/EchartTransportFlow';
// import EchartPoliceForces from './components/echarts/EchartPoliceForces';
// import EchartChangeTrend from './components/echarts/EchartChangeTrend';
// import EchartChinaMapFlow from './components/echarts/EchartChinaMapFlow';
// import EchartWatchVideo from './components/echarts/EchartWatchVideo';
// import EchartWatchBus from '@/components/echarts/EchartWatchBus';
import PTop from './components/PTop';
import PFooter from './components/PFooter';
export default {
  name: 'app',
  components:{
    // EchartRideNumber,
    // EchartTrend,
    // EchartEverydayFlow,
    // EchartHourFlow,
    // EchartTransportFlow,
    // EchartPoliceForces,
    // EchartChangeTrend,
    // EchartChinaMapFlow,
    // EchartWatchVideo,
    // EchartWatchBus
    PTop,
    PFooter
  },
  computed:{
    showTop(){
      return this.$route.meta.topNav
    },
    showFooter(){
      return this.$route.meta.footerNav
    }
  }
}
</script>

<style>
@import url('./assets/style/theme.css');
@import url('./assets/style/iconfont.css');
#app{
  font-size:14px;
  color:#333;
}
</style>
