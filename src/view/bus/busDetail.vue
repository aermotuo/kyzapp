<template>
  <div>
    <inside-top title="当天发车信息"></inside-top>
    <div class="b-detail">
      <div class="b-detail__search">
        <Input search enter-button placeholder="Enter something..." />
      </div>
      <table class="b-detail__table" border="0" cellpadding="0" cellspacing="0">
        <thead class="b-table__thead">
          <tr>
            <td width="25%">乘车日期</td>
            <td width="25%">姓名</td>
            <td width="25%">性别</td>
            <td width="25%">手机号</td>
          </tr>
        </thead>
        <tbody class="b-table__tbody">
          <tr>
            <td>2016-10-01</td>
            <td>张小刚</td>
            <td>男</td>
            <td>1380013800</td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
</template>

<script>
import InsideTop from '@/components/public/InsideTop.vue';
export default {
  name: 'busDetail',
  components: {
    InsideTop
  },
}
</script>

<style scoped>
.b-detail__search{
  background-color:#f2f2f2;
  padding:10px 25px;
}
.b-detail__table{
  margin-top:10px;
  width:100%;
  text-align: center;
  border-top:1px solid #e9e9e9;
}
.b-detail__table td{
  padding: 8px 0;
  color:#666;
  border-bottom:1px solid #e9e9e9;
}
.b-table__thead{
  font-weight: 700;
  background-color:#f2f2f2;
}
.b-table__tbody{
  font-size: 12px;
}
</style>
