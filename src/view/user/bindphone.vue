<template>
  <div class="p-phone">
    <inside-top title="修改手机号码" :size="14"></inside-top>
    <div class="flex p-phone__hd">
      <div class="flex__item flex--align--center p-phone__step" :class="step == 1 ? 'p-phone__step--active': ''">
        1.验证原号码
      </div>
      <div class="flex__item flex--align--center p-phone__step" :class="step == 2 ? 'p-phone__step--active': ''">
        2.绑定新手机
      </div>
    </div>
    <div class="p-phone__bd">
      <form v-if="step == 1">
        <div class="p-form__bd">
          <div class="p-form__group">
            <Input prefix="md-phone-portrait" placeholder="请输入当前手机号码" style="width: 100%" />
          </div>
          <div class="flex flex--align--center p-form__group">
            <div class="flex__item">
              <Input prefix="md-mail" placeholder="请输入短信验证码" style="width: 100%" />
            </div>
            <div class="p-bind__code">
              <Button>发送验证码</Button>
            </div>
          </div>
        </div>
        <Button class="p-form__btn" size="large" type="primary" :long="true" @click="next">下一步</Button>
      </form>
      <form v-if="step == 2">
        <div class="p-form__bd">
          <div class="p-form__group">
            <Input prefix="md-phone-portrait" placeholder="请输入新的手机号码" style="width: 100%" />
          </div>
          <div class="flex flex--align--center p-form__group">
            <div class="flex__item">
              <Input prefix="md-mail" placeholder="请输入短信验证码" style="width: 100%" />
            </div>
            <div class="p-bind__code">
              <Button>发送验证码</Button>
            </div>
          </div>
        </div>
        <Button class="p-form__btn" size="large" type="primary" :long="true">确定</Button>
      </form>
    </div>
  </div>
</template>
<script>
import InsideTop from '@/components/public/InsideTop'
export default {
  name: 'UserBindPhone',
  components:{
    InsideTop
  },
  data(){
    return {
      step: 1
    }
  },
  methods:{
    next(){
      this.step = 2;
    }
  }
}
</script>

<style scoped>
.p-phone{
  background-color: #f9f9f9;
}
.p-phone__hd{
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color:#fff;
  border-bottom:1px solid #f2f2f2;
  overflow: hidden;
}
.p-phone__hd::after{
  content:'';
  position: absolute;
  left:50%;
  margin-left:-22px;
  transform:translateX(-50%) rotate(45deg);
  width:44px;
  height: 44px;
  border-top:1px solid #f2f2f2;
  border-right:1px solid #f2f2f2;
}
.p-phone__step{
  color:#999999;
}
.p-phone__step--active{
  color:#0079FE;
}
.p-phone__bd{
  padding:20px;
}
.p-form__btn{
  margin-top:20px;
}
</style>
