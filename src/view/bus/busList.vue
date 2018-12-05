<template>
  <div>
    <inside-top title="当天发车信息"></inside-top>
    <div class="b-data">
      <div class="b-data__search">
        <Input search enter-button placeholder="Enter something..." />
      </div>
      <table class="b-data__table" border="0" cellpadding="0" cellspacing="0">
        <thead class="b-data__hd">
          <tr>
            <td width="25%">发车时间</td>
            <td width="25%">车牌号</td>
            <td width="25%">司机</td>
            <td width="25%">明细</td>
          </tr>
        </thead>
        <tbody class="b-data__item">
          <tr>
            <td width="25%">20180810</td>
            <td width="25%">粤B62567</td>
            <td width="25%">杨彬</td>
            <td width="25%" class="b-data__jumpDetail" @click="jumpDetail">查看明细 ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view class="bus-route-view" />
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop.vue';
export default {
  name: 'busList',
  components: {
    InsideTop
  },
  methods: {
    jumpDetail(){
      this.$router.push({
        path: '/bus/list/detail'
      })
    }
  }
}
</script>

<style scoped>
.b-data{
  background-color:#f2f2f2;
}
.b-data__search{
  padding:10px 25px;
}
.b-data__table{
  width:100%;
  text-align: center;
  border-collapse: collapse;
}
.b-data__hd td{
  color:#999999 ;
}
.b-data__table td{
  padding:8px;
  border:1px solid #e4e4e4;
}
.b-data__item{
  color:#666666;
  background-color:#fff;
}
.b-data__jumpDetail{
  color:#0079FE;
}

.bus-route-view{
  position: fixed;
  z-index: 4000;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  background-color:#fff;
}
</style>
