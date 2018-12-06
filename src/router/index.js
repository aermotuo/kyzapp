import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=> import('@/view/home/SummaryFlow'),
    },
    {
    path: '/home',
    name: 'home',
    component: () => import('@/view/home/index'),
    children:[
      {
        name: 'summaryflow',
        path: 'summaryflow',
        component: ()=> import('@/view/home/SummaryFlow'),
      },
      {
        name: 'distributionflow',
        path: 'distributionflow',
        component: ()=> import('@/view/home/DistributionFlow'),
      }
    ]
  },{
    path: '/trend',
    name: 'trend',
    component: ()=> import('@/view/trend/index'),
    children:[
      {
        name: 'everyday',
        path: 'everyday',
        component: ()=> import('@/view/trend/everyday'),
      },{
        name: 'hourflow',
        path: 'hourflow',
        component: ()=> import('@/view/trend/hourflow'),
      },{
        name: 'transport',
        path: 'transport',
        component: ()=> import('@/view/trend/transport'),
      },
    ]
  },{
    path: '/bus',
    name: 'bus',
    component:()=> import('@/view/bus/index'),
    children:[
      {
        path: 'list',
        name: 'buslist',
        component: ()=> import('@/view/bus/busList'),
        children:[
          {
            path: 'detail',
            name: 'busdetail',
            component: ()=> import('@/view/bus/busDetail'),
          } 
        ]
      },
      {
        path: 'indoor',
        name: 'busindoor',
        component:()=> import('@/view/bus/busIndoor'),
      },
      {
        path: 'outdoor',
        name: 'busoutdoor',
        component:()=> import('@/view/bus/busOutdoor')
      }
    ]
  },{
    path: '/watch',
    name: 'watch',
    component: ()=>import('@/view/watch/index'),
  },{
    path: '/police',
    name: 'police',
    component:()=>import('@/view/police/index'),
    children: [
      {
        path: 'deploy',
        name: 'policeDeploy',
        component: ()=> import('@/view/police/deploy'),
      },
      {
        path: 'proportion',
        name: 'policeProportion',
        component: ()=> import('@/view/police/proportion'),
      }
    ]
  },{
    path: '/warning',
    name: 'warning',
    component:()=>import('@/view/warning/index'),
    meta:{
      topHide: true
    }
  },{
    path: '/warning/add',
    name: 'warningAdd',
    component:()=>import('@/view/warning/add'),
    meta:{
      topHide: true
    }
  },{
    path: '/user',
    name: 'user',
    component: ()=>import('@/view/user/index'),
    meta:{
      topHide: true
    }
  },{
    path: '/user/upadepass',
    name: 'userPassword',
    component: ()=>import('@/view/user/password'),
    meta:{
      topHide: true
    }
  }]
})
