import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.use(Vuex)
Vue.use(iview);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
