<template>
  <div class="e-ride">
    <div class="e-ride__item">
      <div class="e-ride__item--title">总发客数量</div>
      <div id="flow-bar1" class="e-ride__flow-bar"></div>
    </div>
    <div class="e-ride__item">
      <div class="e-ride__item--title">周发客数</div>
      <div id="flow-bar2" class="e-ride__flow-bar"></div>
    </div>
    <div class="e-ride__item">
      <div class="e-ride__item--title">总发客数量</div>
      <div id="flow-bar3" class="e-ride__flow-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchartRideNumber',
  methods:{
    getFlowBar(id, data, color){
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
          barWidth: 18,
          itemStyle: {
            normal: {
              color: "#5FB878",
              barBorderRadius: 12
            }
          },
          label:{
            show: true,
            position: "insideRight",
            formatter: data.value+'%'
          },
          z: 0,
          data: [data]
        }, {
            type: 'bar',
            barGap: '-100%',
            barWidth: 18,
            itemStyle: {
              normal: {
                color: color,
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
    
    this.getFlowBar('flow-bar1', {
      name: '总发客数量',
      value: 30,
      itemStyle: {
        color: '#5599fe'
      }
    }, "#d6e7ff");
    this.getFlowBar('flow-bar2', {
      name: '总发客数量',
      value: 30,
      itemStyle: {
        color: '#99df21'
      }
    }, "#ebf8d3");
    this.getFlowBar('flow-bar3', {
      name: '总发客数量',
      value: 30,
      itemStyle: {
        color: '#f9ca1e'
      }
    }, "#fef4cf");
  }
}
</script>

<style scoped>
.e-ride__item{
  margin-bottom:5px;
}
.e-ride__item:last-child{
  margin-bottom:0;
}
.e-ride__item--title{
  font-size: 14px;
  color:#666;
}
.e-ride__flow-bar{
  height:20px;
}
</style>

