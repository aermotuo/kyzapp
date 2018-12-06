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
let busImage= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzREQzJDRTJGOTA2MTFFOEEzNDJENUFBRDNEOTc4OUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzREQzJDRTNGOTA2MTFFOEEzNDJENUFBRDNEOTc4OUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNERDMkNFMEY5MDYxMUU4QTM0MkQ1QUFEM0Q5Nzg5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNERDMkNFMUY5MDYxMUU4QTM0MkQ1QUFEM0Q5Nzg5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsGQQgcAAAQCSURBVHjadFVNaFxVFD733PvezGQmM4kmJgrSWrqqLgQLIrUbF+Km/oQWCYYKRXHR4jLddxVQhPqz8wesrYiVFoSgi7oIWFBsQCi0gsU/0toOMZ1kft7Mu/ccvzszKTGtF24m751zv3u+7/w8ozRYzQLRjXGmYq7UMYZsyi+L5QNi6CmYdw3d/rCqF9nrYi56uqSqPTY02QhU6wwczCZgKwXgGJNlM5Mn9q1gTR+EFR5KefTFdoq/iguN6F/FXI4Hkc8nG0LVbIDDQzyyQpSnvJCNJF+JM7tskKVCNxxmLztJtEQqI9iPAOgwbBeIzcNZ0Z7JCnwynt1cdyK8PmEX6mPJcSdKSSe8wiJninDsJkwetO54IkQnQsrmIGxfess00cg/mFoLx8TCLXOgW+Jn/5xOvi31lCrt8ETH0HKA0YJa4Mj4v4v7W2i0TY81i+5nnOdK1ptxuZzjepXo5n32tA2Gyg1/qNgKy4pLgjPUA6jQ3Stg54AEi8tW8gMcmVh3ynXJuTx1M8HZibQblscbcnZ9jKu9lA9BlxGw9EjFps4R20a8KACoc33M/lJuh8XRjv+uWbLPdCpu1nlnZg1c0yDzbWS5U7KXgLHbRKKmL3Of8uA5pngoAHRlteotcVCdZ6WfoOerLNbsT7yQCXShXuVKp8C7XZDLOPI0dg+BvWkpnEC0LRKJ7xrY76rIbLzHOyYodMlK/6J9DhdP4d88T000VDVoTGQLkVxDRJHeCraHjwfoNdhiTd7Cu99wVmLQyF7MXAs0yubqjlRBOUdUqXf0kBKvbE+CDqv6HuuWGp0aqGM28FwBdVqFc0KgDUPzXif/BywaHoj6m7xfC5WYfHZBl3KEnCdmr1FdVzJXYFjdciw+Xx3+XtnyfiUYc9EBsST6eIjtSPq9c16+yFL7UlHMSQphX6eie1JvHoTxDRz6FQw+2xbtUfxMQry3oXYzWQvky24h6mg6espcrxFtVNPbPce1kVb3+VKuX69X0tha6Da9q0u0X4QGRSk0ueopCO2vTxWWEtGsertXY4+x5cTPxT6UNDmPsnrU5qjnMOwRlIOJJQHweEGKfFsfyGWBQmp2Nu9PvomlnwR/JFSoZzpF1CjO1mvuvdWaO4Z6kjQLBwF0ThIQD4OkqB34jSABvVhHzM/lJXsWY6483vCfTK/5I7JlhlA7Ifp92r1Pzh6NBxHhIpA+VtEfYi0qQwXUrAu0FyCvB8cvSP+m8NGOG/61cnfb+NrAgL0ZB6zlOej5DjpoMhrNoNWy/jwgGu1XsonR6lqay7yqfBgH7Oj2ib0BLf/GJ6AUPwEFLjDzHAJ9Udg8GbM6dPsHE/xH6+k82vDTFK5dSBE/AdX2wOFfAQYAl+rtTvierzUAAAAASUVORK5CYII='
export default {
  name: 'WathchBus',
  data(){
    return {
      center: [114.13, 22.615],
      zoom: 15,
      markers: [
        {
          position: [114.13, 22.615],
          icon: busImage,
          events: {
            click: (res) => {
              console.log(res);
              this.$emit('config')
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
