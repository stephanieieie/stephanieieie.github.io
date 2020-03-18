import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {store} from './store/store'
import './assets/css/global.scss'

//global mapFunc
import mapFunc from '@/methods/mapFunc.js'
Vue.prototype.mapFunc = mapFunc;

//import Boostrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

//import element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI) 

//use mapbox
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
Vue.prototype.mapboxgl = mapboxgl;

//import axios
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App)
})
