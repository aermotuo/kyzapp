<template>
  <div class="e-map">
    <div class="e-map__flow" id="chinamap-flow"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china.js';

var data = [
  { name: "北京" },
  { name: "天津" },
  { name: "上海" },
  { name: "重庆" },
  { name: "河北" },
  { name: "河南" },
  { name: "云南" },
  { name: "辽宁" },
  { name: "黑龙江" },
  { name: "湖南" },
  { name: "安徽" },
  { name: "山东" },
  { name: "新疆" },
  { name: "江苏" },
  { name: "浙江" },
  { name: "江西" },
  { name: "湖北" },
  { name: "广西" },
  { name: "甘肃" },
  { name: "山西" },
  { name: "内蒙古" },
  { name: "陕西" },
  { name: "吉林" },
  { name: "福建" },
  { name: "贵州" },
  { name: "广东" },
  { name: "青海" },
  { name: "西藏" },
  { name: "四川" },
  { name: "宁夏" },
  { name: "海南" },
  { name: "台湾" },
  { name: "香港" },
  { name: "澳门" }
];
data.forEach(function(item) {
  item.value = Math.floor(Math.random() * 100000 + Math.random() * 100000);
});
let options = {
  title: {
    text: "全国客流分布统计",
    subtext: "不完全统计",
    textStyle: {
      fontSize: 16,
      fontWeight: "500",
      color: "#666"
    }
  },
  tooltip: {
    show: true,
    formatter: function(params) {
      return (
        "全国客流分布统计图<br>" + params.name + "：" + params.data["value"]
      );
    }
  },
  visualMap: {
    type: "continuous",
    text: ["高", "低"],
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 200000,
    inRange: {
      color: ["#fff", "#029789"]
    },
    textStyle: {
      color: "#000"
    },
    orient: "horizontal",
    inverse: true
  },
  series: [
    {
      name: "mapSer",
      type: "map",
      mapType: "china",
      selectedMode: true,
      label: {
        normal: {
          show: true,
          color: "#d87a80"
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          areaColor: "#fe994e" // 设置鼠标悬浮到省的颜色
        }
      },
      data: data
    }
  ]
};
export default {
  name: 'EchartChinaMapFlow',
  methods:{
    getChinaMapFlow(id){
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options)
    }
  },
  mounted(){
    this.getChinaMapFlow("chinamap-flow")
  }
};
</script>

<style scoped>
  .e-map__flow{
    height: 332px;
  }
</style>

