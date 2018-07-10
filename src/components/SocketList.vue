<template>
  <div>
    <h3>Connected clients</h3>
    <v-list two-line>
      <template v-for="(item, index) in clientList">
        <v-list-tile v-if="$socket.id !== item" :key="item" avatar @click="clickedOnClient(item)">
          <v-list-tile-avatar>
            <img src="http://placekitten.com/50/50">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'clientList',
    ]),
  },

  methods: {
    ...mapActions([
      'getConnectedClients',
    ]),

    clickedOnClient(id) {
      this.$socket.emit('nudge-client', {
        from: this.$socket.id,
        to: id,
      })
    },
  },

  mounted() {
    this.$socket.on('user-connected', this.getConnectedClients)
    this.$socket.on('user-disconnected', this.getConnectedClients)

    this.getConnectedClients()
  },
}
</script>
