import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
//import $ from 'jquery'
import mapFunc from '@/methods/mapFunc.js'

Vue.config.productionTip = false
Vue.prototype.mapFunc = mapFunc;

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
