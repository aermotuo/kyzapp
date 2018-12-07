<template>
  <div class="p-police">
    <tabs :tabs="tabs"></tabs>
    <router-view />
    <div class="p-police__bd">
      <div class="head-row">
        <div class="head-row__title">
          统计分析
        </div>
      </div>
      <div class="p-police__content">
        <table class="p-police__table" border="0" cellpadding="0" cellspacing="0">
          <thead class="p-table__thead">
            <tr>
              <td>岗位</td>
              <td width="25%">警力部署</td>
              <td width="25%">班次地区</td>
              <td width="35%">负责人联系方式</td>
            </tr>
          </thead>
          <tbody class="p-table__tbody">
            <tr>
              <td>机荷</td>
              <td>15</td>
              <td>早班</td>
              <td>刘明1883552233</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="p-police__map">
      <div class="head-row">
        <div class="head-row__title">
          地图展示
        </div>
      </div>
      <PoliceMap></PoliceMap>
    </div>
    <data-list class="p-police__postList" title="岗位列表" :list="list"></data-list>
  </div>
</template>

<script>
import tabs from '@/components/public/tabs';
import DataList from '@/components/public/DataList';
import PoliceMap from '@/components/echarts/PoliceMap';
export default {
  name: 'PoliceIndex',
  components: {
    tabs,
    DataList,
    PoliceMap
  },
  data(){
    return {
      tabs: [
        {
          name: '警力部署',
          link: '/police/deploy'
        },
        {
          name: '投放占比',
          link: '/police/proportion'
        }
      ],
      list:[
        {
          name: '机荷',
        },{
          name: '城地',
        },{
          name: '同乐',
        },{
          name: '丹竹头'
        }
      ]
    }
  },
  created(){
    this.$store.commit('updatePage',{
      name: '警力部署',
      index:4
    });
  }
}
</script>

<style scoped>
.p-police__bd{
  border-top:1px solid #f2f2f2;
  border-bottom:1px solid #f2f2f2;
}
.p-police__content{
  padding:10px;
}
.p-police__table{
  width:100%;
  text-align: center;
  border-top:1px solid #e9e9e9;
}
.p-police__table td{
  padding: 8px 0;
  color:#999;
  border-bottom:1px solid #e9e9e9;
  font-size: 14px;
}
.p-table__thead{
  background-color:#f2f2f2;
}
.p-police__postList{
  background-color: #f9f9f9;
}
</style>
