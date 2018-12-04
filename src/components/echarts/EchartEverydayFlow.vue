<template>
  <div class="e-everyday">
    <div id="everyday-flow" class="e-everyday__flow"></div>
  </div>
</template>

<script>
let options = {
  // title: {
  //   text: "某站点用户访问来源",
  //   x: "center"
  // },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    data:[
      {
        name: "总站"
      },
      {
        name: "同乐"
      },
      {
        name: "爱联"
      },
      {
        name: "长途"
      },
      {
        name: "其他"
      }
    ]
  },
  grid:{
    top: 0,
    right:0,
    bottom:0,
    left:0
  },
  series: [
    {
      name: "客流数据",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 113500,
          name: "总站", 
          itemStyle: {
            color: "#f2637b"
          } 
        },
        { value: 31000, 
        name: "同乐", 
          itemStyle: {
            color: "#4ecb73"
          }  
        },
        { value: 23400, 
          name: "爱联", 
          itemStyle: {
            color: "#36cbcb"
          }  
        },
        { value: 63500, 
          name: "长途", 
          itemStyle: {
            color: "#fbd437"
          }  
        },
        { value: 34800, 
          name: "其他", 
          itemStyle: {
            color: "#3aa1ff"
          }  
        }
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

