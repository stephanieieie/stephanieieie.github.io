import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {store} from './store/store'
import mapFunc from '@/methods/mapFunc.js'
import BootstrapVue from 'bootstrap-vue'
import './assets/css/global.scss'
//import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.mapFunc = mapFunc;
Vue.use(BootstrapVue)
//Vue.prototype.$ = require('jquery');

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
Vue.prototype.mapboxgl = mapboxgl;

new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App)
})
