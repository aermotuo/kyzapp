<template>
  <div class="p-about">
    <inside-top title="关于我们" :size="14"></inside-top>
    <div class="p-about__hd">
      <img src="@/assets/images/u608.png" >
    </div>
    <div class="p-about__bd">
      <div class="p-about__intro">客服热线：400-0000-000</div>
      <div class="p-about__intro">客服邮箱：service@service.com</div>
      <div class="p-about__intro">当前版本：龙岗客运统计v 1.0.0</div>
    </div>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop';
export default {
  name: 'UserAbout',
  components:{
    InsideTop
  }
}
</script>

<style scoped>
.p-about{
  padding:20px;
}
.p-about__hd{
  padding:50px 0;
  text-align: center;
}
.p-about__bd{
  padding:30px 50px;
  font-size: 12px;
  color: #999999;
  line-height: 25px;
  background-color: #fff;
  border:1px solid #f2f2f2;
}
</style>
