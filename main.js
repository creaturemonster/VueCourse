import Vue from 'vue'
import VUeRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter);


new Vue({
  el:'#app', 
  render: h => h(App)
})
