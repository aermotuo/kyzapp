<template>
  <div class="b-outdoor">
    <inside-top title="室外视频列表"></inside-top>
    <div class="flex b-video">
      <div class="flex__col--4 b-video__item" @click="showVideo">
        <div class="b-video__box">
          <span class="iconfont icon-shipin b-video__icon"></span>
          <div class="b-video__name">室外视频1</div>
        </div>
      </div>
      <div class="flex__col--4 b-video__item" @click="showVideo">
        <div class="b-video__box">
          <span class="iconfont icon-shipin b-video__icon"></span>
          <div class="b-video__name">室外视频1</div>
        </div>
      </div>
    </div>
    <Modal  
      v-model="visibility" title="监控视频" mask-closable="false" :maskClosable="false"
       :footer-hide="true" width="auto"  :z-index="3001"> 
      <video src="@/assets/video.mp4" controls></video>
    </Modal>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop.vue';
export default {
  name: 'BusOutdoor',
  data(){
    return {
      visibility: false
    }
  },
  components: {
    InsideTop
  },
  methods:{
    showVideo(){
      this.visibility = true;
    }
  }
}
</script>

<style scoped>
.b-video{
  margin:0 -2px;
  background-color:#f2f2f2;
}
.b-video__item{
  padding:2px 2px;
}
.b-video__box{
  position: relative;
  height:0;
  padding-bottom:100%;
  background-color:#000;
}
.b-video__icon{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -60%);
  font-size:48px;
  color:#eee;
}
.b-video__name{
  position: absolute;
  bottom:0;
  left:0;
  padding:5px;
  width:100%;
  color:#eee;
  background-color:rgba(255,255,255,0.3);
}

video{
  max-width: 100%;
}
</style>
