<template>
  <div class="e-watch">
    <div class="e-watch__video" id="watch-video"></div>
    <Modal  v-model="visibility" :title="videoName"  @on-ok="ok" fullscreen   @on-cancel="cancel" :footer-hide="true"> 
        <div class="e-watch__sp">
          <video src="../../assets/video.mp4" controls></video>
        </div>
    </Modal>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap';
let data = [
  {
    name: "A",
    value: [114.11, 22.62],
  },
  {
    name: "B",
    value: [114.12, 22.62]
  },
  {
    name: "C",
    value: [114.13, 22.62]
  },
  {
    name: "D",
    value: [114.14, 22.62]
  }
];

let options = {
  title: {
    show: false
  },
  tooltip: {
    trigger: "item"
  },
  bmap: {
    center: [114.13, 22.62],
    zoom: 15,
    roam: true,
    mapStyle: {
      styleJson: [
        {
          featureType: "poi",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        }
      ]
    }
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "bmap",
      data: data,
      symbol: 'path://M520.896 80.704c197.952 0 358.976 166.080 358.976 370.112s-161.088 370.112-358.976 370.112-358.848-166.016-358.848-370.112 160.96-370.112 358.848-370.112zM520.896 756.928c162.688 0 294.976-137.344 294.976-306.112 0-168.832-132.288-306.112-294.976-306.112-162.624 0-294.848 137.344-294.848 306.112-0.064 168.768 132.224 306.112 294.848 306.112zM824.256 149.888c-3.724 1.634-8.064 2.585-12.627 2.585-17.744 0-32.128-14.384-32.128-32.128 0-11.337 5.872-21.302 14.74-27.021 22.015-11.66 27.391-20.812 27.647-22.604-1.92-20.864-106.688-69.824-300.992-69.824-191.488 0-299.072 49.536-300.864 69.824 0.128 1.664 5.056 10.432 26.176 21.888 9.622 5.638 15.981 15.927 15.981 27.702 0 17.673-14.327 32-32 32-5.269 0-10.241-1.274-14.624-3.53-49.164-26.604-59.532-57.132-59.532-78.060 0-91.968 189.12-133.824 364.864-133.824 175.808 0 364.992 41.856 364.992 133.824 0 21.248-10.688 52.224-61.632 79.168zM520.96 277.184c0.019-0 0.041-0 0.064-0 95.894 0 173.632 77.738 173.632 173.632 0 95.872-77.701 173.596-173.565 173.632-0.023 0-0.045 0-0.068 0-95.894 0-173.632-77.738-173.632-173.632 0-95.872 77.701-173.596 173.565-173.632zM460.992 592.832c39.199 0 70.976-31.777 70.976-70.976 0-39.199-31.777-70.976-70.976-70.976-39.199 0-70.976 31.777-70.976 70.976 0 39.199 31.777 70.976 70.976 70.976z',
      symbolSize: [20,20],
      symbolKeepAspect:true,
      symbolRotate: 180,
      itemStyle: {
        normal: {
          color: "#000",
        }
      }
    }
  ]
};
export default {
  name: "EchartWatchVideo",
  data(){
    return {
      visibility: false,
      videoName: ''
    }
  },
  methods: {
    getWatchVideo(id) {
      let myChart = this.$echarts.init(document.getElementById(id));
      myChart.setOption(options);
      myChart.on('click', (params)=> {
        this.visibility = true;
        this.videoName = params.data.name
      });
    },
    ok () {
    },
    cancel () {
    }
  },
  mounted() {
    this.getWatchVideo("watch-video");
  }
};
</script>

<style scoped>
.e-watch__video{
  height:600px;
}
.e-watch__sp{
  color:#fff;
  text-align: center;
}
.e-watch__sp{
  width: 100%;
  height: 100%;
}
.e-watch__sp video{
  width: 100%;
  height: 100%;
}
</style>
