<template>
  <div class="p-pass">
    <inside-top title="修改登录密码"></inside-top>
    <div class="p-pass__bd">
      <form >
        <div class="p-form__bd">
          <div class="">

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop'
export default {
  name: 'UserPassword',
  components:{
    InsideTop
  }
}
</script>

<style>
.p-pass{
  background-color:#f9f9f9;
}
.p-pass__bd{
  padding:20px;
}
</style>
