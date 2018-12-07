<template>
  <div>
    <div class="flex flex--align--center c-footer">
      <div class="c-footer__tab" :class="pageIndex == i ? 'c-footer__tab--active' : '' "  v-for="(item, i) in tabs" :key="i" @click="toggelLink(item.link)">
        <div class="iconfont c-tab__icon" :class="item.iconClass"></div>
        {{item.name}}
      </div>
    </div>
    <div class="c-footer__zw"></div>
  </div>  
</template>

<script>
export default {
  name: 'PFooter',
  data(){
    return {
      tabs:[
        {
          iconClass: 'icon-home',
          name: '首页',
          link: '/home/summaryflow'
        },{
          iconClass: 'icon-tubiao',
          name: '态势展示',
          link: '/trend/everyday'
        },{
          iconClass: 'icon-loufang-shixin',
          name: '客运站',
          link: '/bus'
        },{
          iconClass: 'icon-shipin',
          name: '视频查看',
          link: '/watch'
        },{
          iconClass: 'icon-jingli',
          name: '警力部署',
          link: '/police/deploy'
        }
      ]
    }
  },
  computed:{
    pageIndex(){
      return this.$store.state.page.index;
    }
  },
  methods: {
    toggelLink(link){
      this.$router.push({
        path: link
      });
    },
  },
  created(){
  }
}
</script>

<style scoped>
.c-footer{
  position: fixed;
  bottom:0;
  left:0;
  z-index:999;
  width:100%;
  height: 60px;
  border-top:1px solid #f2f2f2;
  background-color:#fff;
}
.c-footer__zw{
  height: 60px;
}
.c-footer__tab{
  flex: 1;
  color:#999;
  text-align: center;
  font-size: 12px;
}
.c-footer__tab--active{
  color:#3091F2;
}
.c-tab__icon{
  font-size: 26px;
  line-height: 1.2;
}
</style>
