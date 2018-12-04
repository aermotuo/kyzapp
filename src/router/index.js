import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=> import('@/view/home/SummaryFlow'),
      meta: {
        topNav: true,
        footerNav: true
      }
    },
    {
    path: '/home',
    name: 'home',
    component: () => import('@/view/home/index'),
    meta: {
      topNav: true,
      footerNav: true
    },
    children:[
      {
        name: 'summaryflow',
        path: 'summaryflow',
        component: ()=> import('@/view/home/SummaryFlow'),
        meta: {
          topNav: true,
          footerNav: true
        }
      },
      {
        name: 'distributionflow',
        path: 'distributionflow',
        component: ()=> import('@/view/home/DistributionFlow'),
        meta: {
          topNav: true,
          footerNav: true
        }
      }
    ]
  },{
    path: '/trend',
    name: 'trend',
    component: ()=> import('@/view/trend/index'),
    meta: {
      topNav: true,
      footerNav: true
    },
    children:[
      {
        name: 'everyday',
        path: 'everyday',
        component: ()=> import('@/view/trend/everyday'),
        meta: {
          topNav: true,
          footerNav: true
        }
      },{
        name: 'hourflow',
        path: 'hourflow',
        component: ()=> import('@/view/trend/hourflow'),
        meta: {
          topNav: true,
          footerNav: true
        }
      },{
        name: 'transport',
        path: 'transport',
        component: ()=> import('@/view/trend/transport'),
        meta: {
          topNav: true,
          footerNav: true
        }
      },
    ]
  },{
    path: '/bus',
    name: 'bus',
    component:()=> import('@/view/bus/index'),
    meta: {
      topNav: true,
      footerNav: true
    },
    children:[
      {
        path: 'buslist',
        name: 'buslist',
        component: ()=> import('@/view/bus/busList'),
        meta: {
          topNav: true,
          footerNav: true
        },
        children:[
          {
            path: 'busdetail',
            name: 'busdetail',
            component: ()=> import('@/view/bus/busDetail'),
            meta: {
              topNav: true,
              footerNav: true
            },
          }
        ]
      }
    ]
  }]
})
