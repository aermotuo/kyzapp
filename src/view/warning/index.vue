<template>
  <div class="p-warning">
    <inside-top title="告警信息">
      <span class="iconfont icon-jiahao p-warning__icon" @click="jumpAdd"></span>
      <span class="iconfont icon-user p-warning__icon"></span>
    </inside-top>
    <div class="flex p-warning__tabs">
      <div class="flex__item p-warning__tab" :class="type == 1 ? 'p-warning__tab--active' : '' " @click="toggle(1)">全部告警信息</div>
      <div class="flex__item p-warning__tab" :class="type == 2 ? 'p-warning__tab--active' : '' " @click="toggle(2)">待处理告警信息</div>
      <div class="flex__item p-warning__tab" :class="type == 3 ? 'p-warning__tab--active' : '' " @click="toggle(3)">已处理告警信息</div>
    </div>
    <div class="p-warning__row">
      <div class="p-warning__item">
        <div class="p-warning__item--hd">
          <div class="p-warning__item--intro">10000</div>
          <div class="p-warning__item--intro">2018-04-11 12:00</div>
          <div class="p-warning__item--intro">粤B62567</div>
          <div class="p-warning__item--intro">陈大发</div>
        </div>
        <div class="p-warning__item--bd">
          龙岗发往南昌超员15人
        </div>
        <div class="p-warning__item--ft">
          <div class="p-warning__item--intro">告警级别：高危</div>
          <div class="p-warning__item--intro">告警类型：超员</div>
          <div class="p-warning__item--intro">处理状态：已处理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop';
export default {
  name: 'WarningIndex',
  components:{
    InsideTop
  },
  data(){
    return {
      type: 1
    }
  },
  methods:{
    toggle(type){
      this.type = type;
    },
    jumpAdd(){
      this.$router.push({
        path: '/warning/add'
      });
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.p-warning{
  background-color:#f9f9f9;
}
.p-warning__icon{
  margin-left:5px;
  font-size: 22px;
  color: #999;
}
.p-warning__tab{
  padding: 12px 15px;
  font-size: 12px;
  text-align: center;
  color: #666666;
  border-bottom: 1px solid transparent;
  background-color:#fff;
}
.p-warning__tab--active{
  color: #0079fe;
  border-bottom-color: #0079fe;
}
.p-warning__item{
  margin-top:10px;
  background-color:#fff;
  border-top:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
}
.p-warning__item--hd{
  padding: 5px 20px;
  overflow: hidden;
  border-bottom:1px solid #e4e4e4;
}
.p-warning__item--intro{
  float: left;
  color:#666666;
  font-size:12px;
  padding-right: 16px;
}
.p-warning__item--bd{
  padding:15px 20px;
  color:#666;
}
.p-warning__item--intro:last-child{
  padding-right:0;
}
.p-warning__item--ft{
  padding: 5px 20px;
  overflow: hidden;
  border-top:1px solid #e4e4e4;
}
</style>
