<template>
  <div class="p-bus">
    <div class="flex flex--align--center p-bus__hd">
      <div class="flex__col--4 p-bus__title">
        客运站查看
      </div>
      <div class="flex__col--8">
        <Input placeholder="Enter something..." />
      </div>
    </div>
    <echart-watch-bus @config="showMenu"></echart-watch-bus>
    <div class="p-bus__bd">
      <div class="p-bus__divide">
        龙岗车站分布
      </div>
      <div class="p-bus__wrap">
        <div class="flex flex--align--stretch p-bus__item">
          <span class="p-bus__item--number">
            1
          </span>
          <div class="flex__item p-bus__item--name">
            龙岗长途汽车站
          </div>
        </div>
        <div class="flex flex--align--stretch p-bus__item">
          <span class="p-bus__item--number">
            2
          </span>
          <div class="flex__item p-bus__item--name">
            布吉汽车站
          </div>
        </div>
        <div class="flex flex--align--stretch p-bus__item">
          <span class="p-bus__item--number">
            3
          </span>
          <div class="flex__item p-bus__item--name">
            横岗长途汽车站
          </div>
        </div>
        <div class="flex flex--align--stretch p-bus__item">
          <span class="p-bus__item--number">
            4
          </span>
          <div class="flex__item p-bus__item--name">
            丹竹头汽车站
          </div>
        </div>
        <div class="flex flex--align--stretch p-bus__item">
          <span class="p-bus__item--number">
            5
          </span>
          <div class="flex__item p-bus__item--name">
            龙岗区汽车总站
          </div>
        </div>
      </div>
    </div>
    <Modal  
      v-model="visibility" :title="busName" mask-closable="false" :maskClosable="false"
      @on-ok="ok"  @on-cancel="cancel" :footer-hide="true" width="auto" 
      class-name="vertical-center-modal"
    > 
      <div class="e-bus">
        <div class="e-bus__body">
          <div class="e-bus__item">总发车:222辆</div>
          <div class="e-bus__item">总人数:6593人</div>
        </div>
        <div class="e-bus__footer">
          <Row>
            <Col span="8">
              <Button @click="busDetail">发车详情</Button>
            </Col>
            <Col span="8">
              <Button >室外视频</Button>
            </Col>
            <Col span="8">
              <Button >室内视频</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
    <router-view class="bus-route-view" />
  </div>
</template>

<script>
import EchartWatchBus from '@/components/echarts/EchartWatchBus';
export default {
  name: 'BusIndex',
  components:{
    EchartWatchBus
  },
  data(){
    return{
      visibility: false,
      busName: ''
    }
  },
  methods: {
    ok () {
    },
    cancel () {
    },
    busDetail(){
      this.$router.push({
        path: '/bus/buslist'
      });
    },
    showMenu(data){
      this.busName = data.name;
      this.visibility = true;
    }
  }
}
</script>

<style scoped>
.p-bus{
  background-color:#f9f9f9;
}
.p-bus__hd{
  height: 45px;
  padding:0 10px;
  background-color:#fff;
}
.p-bus__title{
  font-weight: 700;
  color: #666;
}
.p-bus__bd{
  padding:20px;
}
.p-bus__divide{
  font-size:18px;
  color:#000;
}
.p-bus__item{
  margin-top:15px;
}
.p-bus__item--number{
  width:40px;
  height:40px;
  line-height:40px;
  text-align: center;
  font-weight: 410;
  font-size: 20px;
  color:#fff;
  background-color:#cccccc;
  border-radius: 50%;
}
.p-bus__item--name{
  line-height:40px;
  padding-left:25px;
  font-size:16px;
  color:#000;
  border-bottom:1px solid #f2f2f2;
}

/*模态框*/
.e-bus__item{
  padding:5px 10px;
  margin-bottom:10px;
  font-size:14px;
  background-color:#f5f5f5;
  cursor:pointer;
}
.e-bus__item:hover{
  color:#333;
  background-color:#ececec;
}
.e-bus__footer{
  text-align: center;
}

.bus-route-view{
  position: fixed;
  z-index: 3000;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  background-color:#fff;
}
</style>
