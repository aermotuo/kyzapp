import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/view/index'),
  },{
    path: '/bus',
    name: 'bus',
    component:()=> import('@/view/bus/index'),
  }]
})
