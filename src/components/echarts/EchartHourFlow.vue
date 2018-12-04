<template>
  <div class="e-hour">
    <div id="hour-flow" class="e-hour__flow"></div>
  </div>
</template>

<script>
let options = {
  grid:{
    top: '5%',
    right:'5%',
    bottom:'10%',
    left:'8%'
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
      data: ["7","8","9","10","11","12","13","14","15","16","17","18"],
      axisPointer: {
        type: "shadow"
      },
      axisLabel: {
        show: true
      },
      axisLine: {
        lineStyle: {
          color: "#999"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "人流",
      min: 0,
      max: 28,
      interval: 4,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#999"
        }
      },
      splitLine: {
        lineStyle:{
          color: "#dedede",
          type: "doshed"
        }
      }
    }
  ],
  series: [    
    {
      name: "爱联",
      type: "line",
      yAxisIndex: 0,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      lineStyle: {
        color: "#1890ff"
      },
      itemStyle: {
        color: "#1890ff"
      }
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

