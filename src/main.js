// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './components/index.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#bigbox',
  router,
  store ,
  render:h=>h(Index)
})




