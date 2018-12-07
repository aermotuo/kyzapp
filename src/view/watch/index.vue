<template>
  <div class="p-watch">
    <div class="head-row">
      <div class="head-row__title">
        视频查看
      </div>
    </div>
    <watch-video @config="showVideo"></watch-video>
    <data-list title="视频列表" :list="list"></data-list>
    <Modal  
      v-model="visibility" :title="watchName" mask-closable="false" :maskClosable="false"
      :footer-hide="true" width="auto"  class-name="vertical-center-modal"> 
      <video src="@/assets/video.mp4" controls></video>
    </Modal>
  </div>
</template>

<script>
import DataList from '@/components/public/DataList';
import WatchVideo from '@/components/echarts/WatchVideo';
export default {
  name: 'WatchIndex',
  data(){
    return {
      visibility: false,
      watchName: '查看视频',
      list:[
        {
          name: '坂田地铁站'
        },{
          name: '龙园'
        },{
          name: '第三人民医院'
        },{
          name: '玉平特学校'
        },{
          name: '深圳外国语学校'
        },{
          name: '南坪快速'
        }
      ]
    }
  },
  components:{
    DataList,
    WatchVideo
  },
  methods:{
    showVideo(){
      this.visibility = true;
      // this.watchName = data.name;
    }
  },
  created(){
    this.$store.commit('updatePage',{
      name: '视频查看',
      index:3
    });
  }
}
</script>

<style scoped>
.p-watch__bd{
  padding:20px;
}
.p-watch__divide{
  font-size:18px;
  color:#000;
}
.p-watch__item{
  margin-top:15px;
}
.p-watch__item--number{
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
.p-watch__item--name{
  line-height:40px;
  padding-left:25px;
  font-size:16px;
  color:#000;
  border-bottom:1px solid #f2f2f2;
}
video{
  max-width: 100%;;
}
</style>
