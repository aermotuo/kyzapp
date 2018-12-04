<template>
  <div class="e-trend">
    <div id="flow-table" class="e-trend__flow"></div>
  </div>
</template>
<script>
let options = {
  grid: {
    left: "15%",
    right: "15%",
    bottom:"10%",
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["周发客数量", "当前客流量", "乘客量"]
  },
  xAxis: [
    {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#009688",
          width: 2
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#efefef"
        }
      },
      axisTick: {
        show: false
      },
      data: ["1日","2日","3日","4日","5日","6日","7日","8日","9日","10日","11日","12日"],
      axisPointer:{
        show: true,
        lineStyle:{
          color:'#009688',
          width:2
        },
        z:0
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "周发客数量",
      position: "left",
      axisLine: {
        lineStyle: {
          color: "#009688",
          width: 2
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: "{value} 万"
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["#f9f9f9", "#fdfdfd"]
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#efefef"
        }
      }
    },
    {
      type: "value",
      name: "当前客流量",
      position: "right",
      axisLine: {
        lineStyle: {
          color: "#009688",
          width: 2
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: "{value} 万"
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["#f9f9f9", "#fdfdfd"]
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#efefef"
        }
      }
    }
  ],
  series: [
    {
      name: "周发客数量",
      type: "line",
      yAxisIndex: 0,
      data: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220],
      itemStyle: {
        color: "#009688",
        borderWidth: 2
      },
      lineStyle: {
        color: "#009688",
        width: 2
      }
    },
    {
      name: "当前客流量",
      type: "line",
      yAxisIndex: 1,
      data: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260],
      itemStyle: {
        color: "#1e9fff",
        borderWidth: 2
      },
      lineStyle: {
        color: "#1e9fff",
        width: 2
      }
    },
    {
      name: "乘客量",
      type: "line",
      data: [210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320],
      itemStyle: {
        color: "#5fb878",
        borderWidth: 2
      },
      lineStyle: {
        color: "#5fb878",
        width: 2
      }
    }
  ]
};
export default {
  methods: {
    getFlowTable(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options);
    }
  },
  mounted() {
    this.getFlowTable("flow-table");
  }
};
</script>
<style scoped>
.e-trend__flow {
  height: 300px;
}
</style>
