<template>
  <div class="flex c-tabs">
    <div v-for="(item, i) in tabs" :key="i"  class="flex__item">
      <router-link :to="item.link" v-text="item.name" class="c-tabs__link" :class="current_link == item.link ? 'c-tabs__link--active': ''"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props:{
    tabs:{
      type: Array,
      default: ()=>{return []}
    }
  },
  computed: {
    current_link () {
      return this.$route.path;
    }
  },
}
</script>

<style scoped>
.c-tabs{
  background-color:#fff;
}
.c-tabs__link{
  display: block;
  padding:8px 15px;
  text-align: center;
  color:#666666;
  border-bottom: 1px solid transparent;
}
.c-tabs__link--active{
  color:#0079fe;
  border-bottom-color:#0079fe;
}
</style>
