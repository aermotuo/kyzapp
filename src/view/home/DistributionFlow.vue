<template>
  <div class="p-flow">
    <div class="head-row">
      <div class="head-row__title">
        客流分布
      </div>
    </div>
    <div class="p-flow__content">
      <table class="p-flow__table" border="0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <td>排名</td>
            <td>地区</td>
            <td>人数</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in list" :key="i" >
            <td><span class="p-item__sort" v-text="item.sort"></span></td>
            <td v-text="item.locationName"></td>
            <td v-text="item.peopleNumber"></td>
          </tr>
        </tbody>
      </table>
      <echart-china-map-flow class="echart-china-map-flow"></echart-china-map-flow>
    </div>
  </div>
</template>

<script>
import EchartChinaMapFlow from '@/components/echarts/EchartChinaMapFlow';
export default {
  name: 'DistributionFlow',
  components:{
    EchartChinaMapFlow
  },
  data(){
    return {
      list:[
        {sort: 1, locationName: '浙江', peopleNumber: 62310},
        {sort: 2, locationName: '上海', peopleNumber: 59190},
        {sort: 3, locationName: '广东', peopleNumber: 55891},
        {sort: 4, locationName: '北京', peopleNumber: 51919},
        {sort: 5, locationName: '山东', peopleNumber: 39231},
        {sort: 6, locationName: '湖北', peopleNumber: 37109}]
    }
  }
}
</script>

<style scoped>
.p-flow{
  margin-top:10px;
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;
  background-color:#fff;
}
.p-flow__content{
  padding:10px;
}
.p-flow__table{
  width: 100%;
  text-align: center;
  border:0;
}
.p-flow__table thead{
  color:#999;
  background-color:#f2f2f2;
}
.p-flow__table td{
  padding: 8px 0;
  color:#999;
  border-bottom:1px solid #f2f2f2;
}
.p-item__sort{
  display: inline-block;
  width: 25px;
  height:25px;
  line-height: 25px;
  text-align: center;
  color:#fff;
  background-color:#314659;
  border-radius: 50%;
}
.echart-china-map-flow{
  margin-top:10px;
}
</style>
