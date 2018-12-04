<template>
  <div>
    <tabs :tabs="tabs"></tabs>
    <router-view />
  </div>
</template>

<script>
import tabs from '@/components/public/tabs';
export default {
  name: 'homeIndex',
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
  }
}
</script>

<style scoped>

</style>
