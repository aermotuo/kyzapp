<template>
  <div class="p-pass">
    <inside-top title="修改登录密码" :size="14"></inside-top>
    <div class="p-pass__bd">
      <form>
        <div class="p-form__bd">
          <div class="p-form__group">
            <Input prefix="md-lock" placeholder="请输入旧的登录密码" style="width: 100%" />
          </div>
          <div class="p-form__group">
            <Input prefix="md-lock" placeholder="请设置6-20位新的登录密码" style="width: 100%" />
          </div>
          <div class="p-form__group">
            <Input prefix="md-lock" placeholder="请再次输入新的登录密码" style="width: 100%" />
          </div>
        </div>
        <div class="p-form__intro" >
          <Icon type="md-information-circle"  size="16" class="p-form__icon"/>
          设置新密码不能跟旧密码相同哦！
        </div>
        <Button size="large" type="primary" :long="true">提交</Button>
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

<style scoped>
.p-pass{
  background-color:#f9f9f9;
}
.p-pass__bd{
  padding:20px;
}
.p-form__intro{
  margin-top:15px;
  margin-bottom:15px;
  color:#999;
  font-size:12px;
}
.p-form__icon{
  vertical-align:top;
}
</style>
