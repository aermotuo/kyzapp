<template>
  <div class="e-hour">
    <div id="hour-flow" class="e-hour__flow"></div>
  </div>
</template>

<script>
let options = {
  title: {
    text: "客流时空统计",
    x: "center"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999"
      }
    }
  },
  xAxis: [
    {
      type: "category",
      data: ["7点","8点","9点","10点","11点","12点","13点","14点","15点","16点","17点","18点"],
      axisPointer: {
        type: "shadow"
      },
      axisLabel: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "人流",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        show: false
      }
    },
    {
      type: "value",
      name: "聚集度",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        show: false
      }
    }
  ],
  series: [
    {
      name: "总站",
      type: "bar",
      data: [
        2.0,4.9,7.0,23.2,25.6,76.7,135.6,162.2,32.6,20.0,6.4,3.3]
    },
    {
      name: "同乐",
      type: "bar",
      data: [2.6,5.9,9.0,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6.0,2.3]
    },
    {
      name: "爱联",
      type: "bar",
      data: [2.6,5.9,9.0,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6.0,2.3]
    },
    {
      name: "爱联",
      type: "line",
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};
export default {
  name: "EchartHourFlow",
  methods: {
    getHourFlow(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options);
    }
  },
  mounted() {
    this.getHourFlow("hour-flow");
  }
};
</script>

<style scoped>
.e-hour__flow{
  height: 200px;
}
</style>

