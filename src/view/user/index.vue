<template>
  <div class="p-user">
    <inside-top title="我的账号" :size="14"></inside-top>
    <div class="flex flex--align--center p-user__hd">
      <div class="p-user__image">
        <img src="@/assets/images/userimage.png">
      </div>
      <div class="flex__item p-user__info">
        <div class="p-user__number">13266667777</div>
        <div class="p-user__name">username</div>
      </div>
      <div class="p-user__set">
        <Icon type="md-settings" color="#999" size="24" @click="jump('/user/setup')"/>
      </div>
    </div>
    <div class="p-user__columns">
      <div class="flex flex--align--center p-columns__item" @click="jump('/user/upadepass')">
        <div class="flex__item">
          修改密码
        </div>
        <div class="p-columns__item--icon">
          <Icon type="ios-arrow-forward"  size="16" color="#999" />
        </div>
      </div>
      <div class="flex flex--align--center p-columns__item" @click="jump('/user/bindphone')">
        <div class="flex__item">
          修改手机
        </div>
        <div class="p-columns__item--icon">
          <Icon type="ios-arrow-forward"  size="16" color="#999" />
        </div>
      </div>
      <div class="flex flex--align--center p-columns__item" @click="jump('/user/about')">
        <div class="flex__item">
          关于我们
        </div>
        <div class="p-columns__item--icon">
          <Icon type="ios-arrow-forward"  size="16" color="#999" />
        </div>
      </div>
      <div class="flex flex--align--center p-columns__item">
        <div class="flex__item">
          版本
        </div>
        <div class="p-columns__item--text">
          V1.0
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop';
export default {
  name: 'UserIndex',
  components:{
    InsideTop
  },
  methods:{
    jump(link){
      this.$router.push({
        path: link
      })
    }
  },
  created(){
    this.$store.commit('updatePage',{
      name: '用户中心',
      index: -1
    });
  }
}
</script>

<style scoped>
.p-user{
  background-color:#f9f9f9;
}
.p-user__hd{
  padding:20px;
  background-color:#fff;
  border-bottom:1px solid #e4e4e4;
}
.p-user__image{
  width: 72px;
  height:72px;
}
.p-user__image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p-user__info{
  padding-left:15px;
  color:#999;
}
.p-user__columns{
  margin-top:30px;
  font-size: 14x;
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;
  background-color:#fff;
  
}
.p-columns__item{
  padding:10px 20px;
  background-color:#fff;
  border-bottom:1px solid #f2f2f2;
}
.p-columns__item:last-child{
  border-bottom:0;
}
.p-columns__item--text{
  font-size: 12px;
  color:#999;
}
</style>
