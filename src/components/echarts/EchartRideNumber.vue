<template>
  <div class="e-ride">
    <div class="e-ride__item">
      <div class="e-ride__item--title">总发客数量</div>
      <div class="e-ride__item--intro">同上期增长</div>
      <div id="flow-bar1" class="e-ride__flow-bar"></div>
    </div>
    <div class="e-ride__item">
      <div class="e-ride__item--title">总发客数量</div>
      <div class="e-ride__item--intro">同上期增长</div>
      <div id="flow-bar2" class="e-ride__flow-bar"></div>
    </div>
    <div class="e-ride__item">
      <div class="e-ride__item--title">总发客数量</div>
      <div class="e-ride__item--intro">同上期增长</div>
      <div id="flow-bar3" class="e-ride__flow-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchartRideNumber',
  methods:{
    getFlowBar(id, data){
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption({
        grid:{
            top:0,
            bottom:0,
            left:0,
            right: 0
        },
        xAxis: {
            show:false
        },
        yAxis: {
          show:false,
          data: ['']
        },
        series: [{
          type: 'bar',
          barGap: '-100%',
          barWidth: 25,
          itemStyle: {
            normal: {
              color: "#5FB878",
              barBorderRadius: 12
            }
          },
          label:{
            show: true,
            position: "insideRight",
            formatter: [data]+'%'
          },
          z: 0,
          data: [data]
        }, {
            type: 'bar',
            barGap: '-100%',
            barWidth: 25,
            itemStyle: {
              normal: {
                color: '#e2e2e2',
                barBorderRadius: 12
              }
            },
            z: -1,
            data: [100]
        }]
      });
    },
  },
  mounted(){
    this.getFlowBar('flow-bar1', 30);
    this.getFlowBar('flow-bar2', 20);
    this.getFlowBar('flow-bar3', 25);
  }
}
</script>

<style scoped>
.e-ride__item{
  margin-bottom:20px;
}
.e-ride__item:last-child{
  margin-bottom:0;
}
.e-ride__item--title{
  margin-bottom:10px;
  font-size: 20px;
  color:#666;
}
.e-ride__flow-bar{
  height:30px;
}
</style>

