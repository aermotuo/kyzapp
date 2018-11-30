<template>
  <div class="e-transport">
    <div id="transport-flow" class="e-transport__flow"></div>
  </div>
</template>

<script>
let option = {
  title: {
    text: "客运站数据",
    x: "center"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%"
  },
  xAxis: {
    type: "value",
    axisLabel: {
      show: false
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
      data: [18203, 23489, 29034, 104970, 131744]
    },
    {
      name: "17日",
      type: "bar",
      data: [19325, 23438, 31000, 121594, 134141]
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

