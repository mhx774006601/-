import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import myindex from '@/page/myindex'
import mybonds from '@/page/mybonds/mybonds'
import custom from '@/page/mybonds/custom'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mybonds',
      component: mybonds,
    },
    {
      path:'/mybonds',
      name:'mybonds',
      component:mybonds,
    },
    {
      path:'/custom',
      name:'custom',
      component:custom
    }
       
  ]
})
