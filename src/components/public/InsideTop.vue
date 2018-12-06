<template>
  <div>
    <div class="flex flex--align--center i-top">
      <div class="flex__item i-top__return" @click="goBack">
        <span class="iconfont icon-fanhui"></span> 
        返回
      </div>
      <div class="flex__col--6 i-top__title" v-text="title"></div>
      <div class="flex__item i-top__right">
        <slot></slot>
      </div>
    </div>
    <div class="i-top__zw"></div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: ''
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.i-top{
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
  width:100%;
  height: 50px;
  padding:0 15px;
  border-bottom:1px solid #e9e9e9;
  background-color: #fff;
}
.i-top__return {
  color: #0079FE;
  line-height: 1;
  font-size: 16px;
}
.i-top__title{
  text-align: center;
  font-size: 18px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.i-top__right{
  text-align: right;
}
.i-top__zw{
  height:50px;
}
</style>
