<template>
  <div class="data__bd">
    <div class="data__title" v-text="title"></div>
    <div class="data__wrap">
      <div class="flex flex--align--stretch data__item" v-for="(item, i) in list" :key="i">
        <span class="data__item--number" v-text="i+1"></span>
        <div class="flex__item data__item--name" v-text="item.name"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  props:{
    title: {
      type: String,
      default: '标题'
    },
    list:{
      type: Array,
      default:()=>{return []}
    }
  }
}
</script>

<style>
.data__bd{
  padding:20px;
}
.data__title{
  font-size:18px;
  color:#000;
}
.data__item{
  margin-top:15px;
}
.data__item--number{
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
.data__item--name{
  line-height:40px;
  padding-left:25px;
  font-size:16px;
  color:#000;
  border-bottom:1px solid #f2f2f2;
}

</style>
