<template>
  <div class="e-transport">
    <div id="transport-flow" class="e-transport__flow"></div>
  </div>
</template>

<script>
let option = {
  // title: {
  //   text: "客运站数据",
  //   x: "center"
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data:[
      {
        name: "16日"
      },
      {
        name: "17日"
      }
    ]
  },
  grid: {
    top: 0,
    left: "2%",
    right: "0%",
    top: "15%",
    bottom: "5%"
  },
  xAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true
    },
    splitLine: {
      lineStyle:{
        color: "#535353",
        type: "dashed"
      }
    }
  },
  yAxis: {
    type: "category",
    data: ["其他", "长途客运", "爱联", "同乐", "总站"],
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      name: "16日",
      type: "bar",
      data: [18203, 23489, 29034, 104970, 131744],
      itemStyle:{
        color: "#3aa1ff"
      }
    },
    {
      name: "17日",
      type: "bar",
      data: [19325, 23438, 31000, 121594, 134141],
      itemStyle:{
        color: "#4ecb73"
      }
    }
  ]
};
export default {
  name: "EchartTransportFlow",
  methods: {
    getTransportFlow(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(option);
    }
  },
  mounted() {
    this.getTransportFlow("transport-flow");
  }
};
</script>

<style scoped>
.e-transport__flow{
  height:200px;
}
</style>

