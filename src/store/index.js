import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import clients from './modules/clients'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    clients,
  },
  strict: true,
})
