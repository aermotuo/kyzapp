<template>
  <div>
    <tabs :tabs="tabs"></tabs>
    <router-view />
  </div>
</template>

<script>
import tabs from '@/components/public/tabs';
export default {
  name: 'HomeIndex',
  components:{
    tabs
  },
  data(){
    return {
      tabs: [
        {
          name: '客流汇总',
          link: '/home/summaryflow'
        },
        {
          name: '客流全国分布',
          link: '/home/distributionflow'
        }
      ]
    }
  },
  created(){
    this.$store.commit('updatePage',{
      name: '首页',
      index: 0
    });
  }
}
</script>

<style scoped>

</style>
