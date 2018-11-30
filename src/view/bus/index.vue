<template>
  <div class="p-bus">
    <Row type="flex" align="middle" class="p-bus__hd" >
      <Col span="6" class="p-bus__title" >
        客运站查看
      </Col>
      <Col span="18" >
        <Input search  enter-button placeholder="车站名称" />
      </Col>
    </Row>
    <echart-watch-bus></echart-watch-bus>
    <div class="p-bus__ft">
      <div class="p-bus__ft-name">龙岗车站分布</div>
      <div class="p-bus__row">
        <Row type="flex" align="middle" class="p-bus__item">
          <Col span="4">
            <span class="p-bus__item--number">1</span>
          </Col>
          <Col span="18" class="p-bus__item--name">龙岗长途汽车站</Col>
        </Row>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import EchartWatchBus from '@/components/echarts/EchartWatchBus';
export default {
  name: 'PageBusIndex',
  components:{
    EchartWatchBus
  }
}
</script>

<style scoped>
.p-bus__hd{
  padding:10px 10px;
  border-bottom:1px solid #dedede;
  background-color:#fff;
}
.p-bus__title{
  font-size:14px;
  font-weight: bold;
}
.p-bus__ft{
  padding:15px;
}
.p-bus__ft-name{
  font-size:18px;
}
.p-bus__row{
  margin-top:20px;
}
.p-bus__item{
  position: relative;
  padding:0 30px;
  padding-bottom:10px;
  margin-bottom: 10px;
}
.p-bus__item::after{
  content:'';
  position: absolute;
  right:30px;
  bottom:0;
  width: 75%;
  height: 1px;
  background-color:#dedede;
}
.p-bus__item--number{
  display: block;
  width:30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size:16px;
  color:#fff;
  border-radius: 50%;
  background-color:#cccccc;
}
</style>
