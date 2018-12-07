<template>
  <div class="p-setup">
    <inside-top title="账号信息" :size="14">
      <span class="p-setup__save" @click="save">保存</span>
    </inside-top>
    <div class="p-setup__hd">
      <img class="p-setup__img" src="@/assets/images/userimage.png">
      <div class="p-setup__imgintro">点击修改头像</div>
    </div>
    <div class="p-setup__info">
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">姓名</label>
        <div class="flex__item">
          <Input width="100%" class="p-form__input"></Input>
        </div>
      </div>
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">性别</label>
        <div class="flex__item">
          <RadioGroup v-model="user.sex">
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">手机号</label>
        <div class="flex__item">
          <Input width="100%" class="p-form__input"></Input>
        </div>
      </div>
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">职务</label>
        <div class="flex__item">
          <Input width="100%" class="p-form__input"></Input>
        </div>
      </div>
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">所在区域</label>
        <div class="flex__item">
          <Input width="100%" class="p-form__input"></Input>
        </div>
      </div>
      <div class="flex flex--align--center p-form__group">
        <label class="p-form__label">详细地址</label>
        <div class="flex__item">
          <Input width="100%" class="p-form__input"></Input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop';
export default {
  name: 'UserSetup',
  components:{
    InsideTop
  },
  data(){
    return {
      user:{
        sex: '1'
      }
    }
  },
  methods:{
    save(){
    }
  }
}
</script>

<style scoped>
.p-setup__hd{
  margin-top:10px;
  padding:20px;
  background-color:#fff;
  text-align: center;
  border-top:1px solid #f2f2f2;
}
.p-setup__img{
  width:72px;
  height: 72px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
}
.p-setup__imgintro{
  color:#999;
  font-size:12px;
}
.p-setup__info{
  margin-top:40px;
  background-color:#fff;
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;
}
.p-form__label{
  color:#666;
  margin-right: 30px;
}
.p-form__group{
  border-bottom-color:#f2f2f2;
}
.p-setup__save{
  color:#3478F7;
}
</style>
