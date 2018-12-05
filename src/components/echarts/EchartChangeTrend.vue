<template>
  <div class="e-change">
    <div class="e-change__trand" id="change-trend"></div>
  </div>
</template>

<script>
let options = {
  title: {
    text: "警力投向与投量",
    textStyle: {
      color: "#666",
      fontWeight: "100",
      fontSize: "16"
    }
  },
  tooltip: {
    trigger: "axis"
  },
  grid:{
    top:"15%",
    bottom:"15%",
    left:"10%",
    right:"10%",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["丹竹头", "城地", "机荷", "同乐"],
    axisLabel: {
      color: "#999"
    },
    axisLine: {
      lineStyle: {
        color: "#009688",
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisPointer:{
      show: true,
      lineStyle:{
        color:'#009688',
        width:2
      },
      z:0
    }
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}",
      color: "#999"
    },
    axisLine: {
      lineStyle: {
        color: "#009688",
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: "#eee",
        type: "dashed"
      }
    }
  },
  series: [
    {
      name: "今年",
      type: "line",
      data: [120, 230, 340, 320],
      lineStyle: {
        color: "#1e9fff"
      },
      itemStyle: {
        color: "#1e9fff"
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      },
    }
  ]
};
export default {
  name: "EchartChangeTrend",
  methods:{
    getChangeTrend(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options)
    }
  },
  mounted(){
    this.getChangeTrend("change-trend");
  }
};
</script>

<style scoped>
.e-change__trand{
  height:330px;
}
</style>
