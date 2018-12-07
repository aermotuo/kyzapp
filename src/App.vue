<template>
  <div id="app">
    <p-top v-show="topHide"></p-top>
    <router-view />
    <p-footer></p-footer>
  </div>
</template>

<script>
import PTop from './components/PTop';
import PFooter from './components/PFooter';
export default {
  name: 'app',
  components:{
    PTop,
    PFooter
  },
  computed:{
    topHide(){
      return !this.$route.meta.topHide
    }
  },
  mounted(){
  }
}
</script>

<style>
@import url('./assets/style/theme.css');
@import url('./assets/style/iconfont.css');
#app{
  font-size:14px;
  color:#333;
  height:100%;
  background-color:#f9f9f9;
}
</style>
