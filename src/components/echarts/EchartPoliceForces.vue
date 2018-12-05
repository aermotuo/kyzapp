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
      color: "#666",
      fontWeight: "100",
      fontSize: "16"
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid:{
    top:"15%",
    bottom:"10%",
    left:"15%",
    right:"15%",
  },
  xAxis: [
    {
      type: "category",
      data: ["丹竹头", "城地", "机荷", "同乐"],
      axisLine: {
        lineStyle: {
          color: "#999",
          width: 1
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#eeeeee"
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
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value}"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#999",
        }
      },
      axisTick: {
        show: false
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
      name: "今年",
      type: "bar",
      itemStyle: {
        normal: { color: "#1e9fff" }
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      },
      data: [{
        value: 787,
        itemStyle: {
          color:"#61a5e8"
        }
      },{
        value: 571,
        itemStyle: {
          color:"#7ecf51"
        }
      },{
        value: 999,
        itemStyle: {
          color:"#eecb5f"
        }
      },{
        value: 341,
        itemStyle: {
          color:"#9570e5"
        }
      }]
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
