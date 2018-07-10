import Vue from 'vue'

const endpoint = 'http://localhost:3000'

export default {
  getConnectedClients() {
    return Vue.http.get(`${endpoint}/clients`)
  },
}
