import api from './../../api'
import * as mutation from './../mutation-types'

const state = {
  clients: [],
  loading: false,
}

const getters = {
  clientList: (state) => state.clients,
}

const mutations = {
  [mutation.SET_CLIENT_LIST](state, payload) {
    state.clients = payload
  },
  [mutation.IS_LOADING_CLIENT_LIST](state, payload) {
    state.loading = payload
  },
}

const actions = {
  getConnectedClients: ({ commit }) => new Promise((resolve, reject) => {
    const onSuccess = (response) => {
      commit(mutation.SET_CLIENT_LIST, response.body)
      commit(mutation.IS_LOADING_CLIENT_LIST, false)

      resolve(response)
    }

    const onError = (error) => {
      commit(mutation.SET_CLIENT_LIST, [])
      commit(mutation.IS_LOADING_CLIENT_LIST, false)
      reject(error)
    }

    commit(mutation.IS_LOADING_CLIENT_LIST, true)

    api.getConnectedClients().then(onSuccess).catch(onError)
  }),
}

export default {
  state,
  actions,
  getters,
  mutations,
}
