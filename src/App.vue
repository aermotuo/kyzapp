<template>
  <div id="app">
    <people-number></people-number>
    <echart-trend></echart-trend>
    <echart-ride-number></echart-ride-number>
    <echart-everyday-flow></echart-everyday-flow>
    <echart-hour-flow></echart-hour-flow>
    <echart-transport-flow></echart-transport-flow>
    <echart-police-forces></echart-police-forces>
    <echart-change-trend></echart-change-trend>
    <echart-china-map-flow></echart-china-map-flow>
    <echart-watch-video></echart-watch-video>
    <echart-watch-bus></echart-watch-bus>
    <router-view />
  </div>
</template>

<script>
import PeopleNumber from './components/kltj/PeopleNumber';
import EchartRideNumber from './components/echarts/EchartRideNumber';
import EchartTrend from './components/echarts/EchartTrend';
import EchartEverydayFlow from './components/echarts/EchartEverydayFlow';
import EchartHourFlow from './components/echarts/EchartHourFlow';
import EchartTransportFlow from './components/echarts/EchartTransportFlow';
import EchartPoliceForces from './components/echarts/EchartPoliceForces';
import EchartChangeTrend from './components/echarts/EchartChangeTrend';
import EchartChinaMapFlow from './components/echarts/EchartChinaMapFlow';
import EchartWatchVideo from './components/echarts/EchartWatchVideo';
import EchartWatchBus from './components/echarts/EchartWatchBus';
export default {
  name: 'app',
  components:{
    PeopleNumber,
    EchartRideNumber,
    EchartTrend,
    EchartEverydayFlow,
    EchartHourFlow,
    EchartTransportFlow,
    EchartPoliceForces,
    EchartChangeTrend,
    EchartChinaMapFlow,
    EchartWatchVideo,
    EchartWatchBus
  }
}
</script>

<style>
@import url('./assets/style/theme.css');
</style>
