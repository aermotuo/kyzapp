import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'index',
    component: () => import('@/view/home/index'),
    children:[
      {
        name: 'summaryflow',
        path: 'summaryflow',
        component: ()=> import('@/view/home/SummaryFlow')
      },
      {
        name: 'distributionflow',
        path: 'distributionflow',
        component: ()=> import('@/view/home/DistributionFlow')
      }
    ]
  },{
    path: '/bus',
    name: 'bus',
    component:()=> import('@/view/bus/index'),
  }]
})
