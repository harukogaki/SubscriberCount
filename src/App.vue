<template>
  <div id="app">
    Live Subscriber Count
    <div> {{subscriberCount}} </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {subscriberCount: '', channelId: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw'}
  },
  created: function() {
     this.fetchYoutubeStats(this.channelId);
  },
  methods: {
      fetchYoutubeStats: async function (channelId) {
        const response = await axios.get('/api/getYTInfo', {
          headers: { 
              'Content-Type' : 'application/json'
          },
          params: {
            channelId
          }
        });

        this.subscriberCount = response.data.items[0].statistics.subscriberCount;
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
