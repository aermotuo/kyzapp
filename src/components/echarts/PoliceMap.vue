<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :center="center" :zoom="zoom">
        <el-amap-circle v-for="(circle, i) in circles"  :key="i"
          :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"
          :strokeColor="circle.strokeColor" :strokeWeight="circle.strokeWeight" :fillColor="circle.fillColor">
        </el-amap-circle>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliceMap',
  data(){
    return {
      center: [114.13, 22.615],
      zoom: 15,
      circles: [
        {
          center: [114.13, 22.615],
          radius: 200,
          fillOpacity: 0.5,
          fillColor: "#cc0000",
          strokeColor: "#eee",
          strokeWeight: 1,
          events: {
            click: () => { 
            }
          }
        }
      ]
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
