// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import 'vuetify/dist/vuetify.min.css'
import './../iconfont/material-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueSocketIO, io('http://localhost:3000'), store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
