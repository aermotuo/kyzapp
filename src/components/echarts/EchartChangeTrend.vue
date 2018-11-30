<template>
  <div class="e-change">
    <div class="e-change__trand" id="change-trend"></div>
  </div>
</template>

<script>
let options = {
  title: {
    text: "投放变化趋势"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["去年", "今年"]
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["丹竹头", "城地", "机荷", "同乐"],
    axisLabel: {
      color: "#333"
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
      show: true,
      lineStyle: {
        color: "#eee"
      }
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
      color: "#333"
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
    splitArea: {
      show: true,
      areaStyle: {
        color: ["#f9f9f9", "#fdfdfd"]
      }
    },
    splitLine: {
      lineStyle: {
        color: "#eee"
      }
    }
  },
  series: [
    {
      name: "去年",
      type: "line",
      data: [110, 220, 300, 310],
      lineStyle: {
        color: "#009688"
      },
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ],
        itemStyle: {
          color: "#009688"
        }
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }],
        lineStyle: {
          color: "#009688"
        }
      },
      itemStyle: {
        color: "#009688"
      }
    },
    {
      name: "今年",
      type: "line",
      data: [120, 230, 340, 320],
      lineStyle: {
        color: "#1e9fff"
      },
      markPoint: {
        data: [
          { type: "min", name: "最小值" },
          { type: "max", name: "最大值" }
        ],
        itemStyle: {
          color: "#1e9fff"
        }
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }],
        lineStyle: {
          color: "#1e9fff"
        }
      },
      itemStyle: {
        color: "#1e9fff"
      }
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
