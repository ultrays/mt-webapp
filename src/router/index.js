import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index.vue'
import KtvList from '../pages/ktvList.vue'
import Ktv from '../pages/ktv.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/index',
      name: 'index',
      component: Index
    },{
      path: '/ktvlist',
      name: 'ktvList',
      component: KtvList
    },{
      path: '/ktv',
      name: 'ktv',
      component: Ktv
    }
  ]
})
