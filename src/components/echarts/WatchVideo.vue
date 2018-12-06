<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="zoom" :clickable="true">
        <el-amap-marker v-for="(marker, index) in markers" 
        :key="index" :position="marker.position" :events="marker.events" :icon="marker.icon" :visible="marker.visible" :draggable="marker.draggable" :vid="index">
        </el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
let videoImage= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUFDRkI1RkVGOTA2MTFFODg4RjNGRDY1MEQxMkYxRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUFDRkI1RkZGOTA2MTFFODg4RjNGRDY1MEQxMkYxRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QUNGQjVGQ0Y5MDYxMUU4ODhGM0ZENjUwRDEyRjFGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QUNGQjVGREY5MDYxMUU4ODhGM0ZENjUwRDEyRjFGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsmtC0gAAAOJSURBVHjarJRdiFVVFMfXx97nnHvnzr06qTMyllLhVORDBhZBWARREEJvDUT1YFAvA1YQ9RBEoE8VEQhaUUH1ED00D0HhQ4YoWC+BRClkNSTzQc5MNvfr7L3Xap1xCs1rTx7OPueyz1r/uz5+a6OqwrW88FLBX9YjiAOIOYMPCEAK0dMeQJgEhRYJnEish12EBUGEGxYi5GHNf03nqoIs9GzK8GD12aS79rmnCOsrOxb9xvYf3Dofy/8K0qXhmgOA2HJ0ONToIEf9qCjFIpO6go5wELS9x6Kj3WVO7dLh2P+mvDiMcKHBL7Vzvz9qvH84wtGir9DLEQITFGWC4BDY8lemn0vEDZtnyhabRGNQhEtNHu3W3P56O7xw4+/x6JbzAr2Cdkamz5TghGT4JPUE+FyC7Hy8Izhqzm1xB2ZH8V+Ny1MWmqreqSavd4cBlhl29Ai8Fznko27vZe6D5Hm6k1lRvSXTjm8J04ua4daBgsnho5TkGAjBUouvXxrhvY1uOimQjliSn2NUkIL24Lif5MLKrfIpqbVb6eGBgobJtoR4ygeAdW0YJaSp5PGJRPxQYnoKqzpVK8K9fc8Qcj5d7SWiiX8k3OUtwhVD4rroFLpM52KFELsPSVYLcvEmBMewWLSNUdVaGELIk3YHRmiOx43l+1ypUKLMUpSPUdfEqqdZY1IInfRuEQSaog9UgIvq14MFQd5PnkYNk1s2Lgtsm4uPK+onutZEJPwD+vHu2kL6NZjn0jA/x6o/COqRgRz+NGaSuT9bS6C1TrhJkaCTr47fBhRsWWpnOwZhs20GnvYuNfw7vt2/K6B+u2P2aqPncahsZCuJ4EzRTbcaLlJ6hMRo813NoUGewT5lfqOxHKbKdnq7HgE2hwGCv426pjjclUTnQsbHrP7rOOlXZvJeYugg4D1W0+etMTkkmfKiX5rEpvH5eDyPcqXgj1uz77zinc3FQCsNiyqjfYbEawbakKW82puE+oVTfbr1l8x2Cnq1W9ArzU56ZnwhHrqyKUi3m9OZfo1HQkYVuW+6IA1OVnZJaIcE5kEeoQSz3RpWh8k8Wgn+rPPEwKZcGOKbZ8bcSaN/xHisIjrNAt8nhBmblL79Y8sJ3GYuuyLjcBWOnUAvaxkPTMwPSHmlIJjZxFAPsDM5mowEu217o636RRChbyyu2K9TLuq0xThtNm3sJ9g+SPBaXH8LMACwiuE9d4ejOAAAAABJRU5ErkJggg=='
export default {
  name: 'WathchVideo',
  data(){
    return {
      center: [114.13, 22.615],
      zoom: 15,
      markers: [
        {
          position: [114.13, 22.615],
          icon: videoImage,
          events: {
            click: (res) => {
              console.log(res);
              this.$emit('config');
            }
          },
          visible: true,
          draggable: false,
        }
      ],
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.amap-wrapper {
  width:100%;
  height: 300px;
}
</style>
