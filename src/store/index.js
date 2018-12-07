import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    page:{
      name: '首页',
      index: 0
    }
  },
  mutations:{
    updatePage(state, data){
      state.page = data;
    }
  }
})