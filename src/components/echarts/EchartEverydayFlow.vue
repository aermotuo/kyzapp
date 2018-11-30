<template>
  <div class="e-everyday">
    <div id="everyday-flow" class="e-everyday__flow"></div>
  </div>
</template>

<script>
let options = {
  title: {
    text: "某站点用户访问来源",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: "客流数据",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 113500, name: "总站" },
        { value: 31000, name: "同乐" },
        { value: 23400, name: "爱联" },
        { value: 63500, name: "长途" },
        { value: 34800, name: "其他" }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};
export default {
  name: 'EchartEverydayFlow',
  methods: {
    getEverydayFlow(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options);
    }
  },
  mounted() {
    this.getEverydayFlow("everyday-flow");
  }
};
</script>

<style scoped>
.e-everyday__flow {
  height: 200px;
}
</style>

