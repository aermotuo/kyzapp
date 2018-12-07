<template>
  <div class="p-bus">
    <div class="flex flex--align--center head-row">
      <div class="flex__col--4 head-row__title">
        客运站查看
      </div>
      <div class="flex__col--8">
        <Input placeholder="Enter something..." />
      </div>
    </div>
    <watch-bus @config="showMenu"></watch-bus>
    <data-list title="龙岗车站分布" :list="list"></data-list>
    <Modal  
      v-model="visibility" title="龙岗车站分布" mask-closable="false" :maskClosable="false"
      :footer-hide="true" width="auto"  class-name="vertical-center-modal"> 
      <div class="e-bus">
        <div class="e-bus__body">
          <div class="e-bus__item">已发车：2500</div>
          <div class="e-bus__item">进站人数：1000</div>
          <div class="e-bus__item">进站车辆：100</div>
        </div>
        <div class="e-bus__footer">
          <Row>
            <Col span="8">
              <Button @click="busJumpPage('/bus/list')">发车详情</Button>
            </Col>
            <Col span="8">
              <Button @click="busJumpPage('/bus/indoor')">室内视频</Button>
            </Col>
            <Col span="8">
              <Button @click="busJumpPage('/bus/outdoor')">室外视频</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
    <router-view class="bus-route-view" />
  </div>
</template>

<script>
import DataList from '@/components/public/DataList';
import WatchBus from '@/components/echarts/WatchBus';
export default {
  name: 'BusIndex',
  components:{    
    DataList,
    WatchBus
  },
  data(){
    return{
      visibility: false,
      busName: '',
      list: [
        {
          name: '龙岗长途汽车站'
        },{
          name: '布吉汽车站'
        },{
          name: '横岗长途汽车站'
        },{
          name: '丹竹头汽车站'
        },{
          name: '龙岗区汽车总站'
        }
      ]
    }
  },
  methods: {
    busJumpPage(link){
      this.$router.push({
        path: link
      });
    },
    showMenu(){
      // this.busName = data.name;
      this.visibility = true;
    }
  },
  created(){
    this.$store.commit('updatePage',{
      name: '客运站',
      index:2
    });
  }
}
</script>

<style scoped>
.p-bus{
  background-color:#f9f9f9;
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
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
