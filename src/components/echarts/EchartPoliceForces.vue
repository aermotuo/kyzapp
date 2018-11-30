<template>
  <div class="e-police">
    <div id="police-forces" class="e-police__forces"></div>
  </div>
</template>

<script>
let options = {
  title: {
    text: "警力投向与投量",
    textStyle: {
      color: "#999",
      fontWeight: "normal"
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line"
    }
  },
  legend: {
    data: ["去年", "今年"]
  },
  xAxis: [
    {
      type: "category",
      data: ["丹竹头", "城地", "机荷", "同乐"],
      axisLine: {
        lineStyle: {
          color: "#009688",
          width: 2
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#eeeeee"
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
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value}"
      },
      axisLine: {
        lineStyle: {
          color: "#009688",
          width: 2
        }
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
          color: "#eeeeee"
        }
      }
    }
  ],
  series: [
    {
      name: "去年",
      type: "bar",
      itemStyle: {
        normal: { color: "#009688" }
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      },
      data: [1043, 1456, 1900, 1200]
    },
    {
      name: "今年",
      type: "bar",
      itemStyle: {
        normal: { color: "#1e9fff" }
      },
      markPoint: {
        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      },
      data: [787, 571, 999, 341]
    }
  ]
};

export default {
  name: "EchartPoliceForces",
  methods: {
    getPoliceForces(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options);
    }
  },
  mounted() {
    this.getPoliceForces("police-forces");
  }
};
</script>

<style scoped>
.e-police__forces {
  height: 330px;
}
</style>
