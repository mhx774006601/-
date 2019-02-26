// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Vuex from 'vuex'
import VueRouter from 'vue-router';
Vue.use(Vuex)
Vue.use(iView)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getter: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count++
      
    }
  },
  actions: {
    addCount(context) {
      // 可以包含异步操作
      // context 是一个与 store 实例具有相同方法和属性的 context 对象
    }
}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
