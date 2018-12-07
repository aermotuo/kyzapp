import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import axios from 'axios';
import VueAMap from 'vue-amap'; //高德地图

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.use(iview);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
