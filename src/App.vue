<template>
  <div id="app">
    <subscriber-count :count="this.count"></subscriber-count>
  </div>
</template>

<script>
import axios from 'axios'
import SubscriberCountVue from './components/SubscriberCount.vue';

export default {
  name: 'app',
  data() {
    return {count: '', channelId: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw'}
  },
  created: function() {
    this.fetchYoutubeStats();
    global.setInterval(this.fetchYoutubeStats, 1000);
  },
  components: {
    'subscriber-count': SubscriberCountVue
  },
  methods: {
    fetchYoutubeStats: async function () {
      const response = await axios.get('/api/getYTInfo?channelId=' + this.channelId);

        if (response){
          this.count = response.data.items[0].statistics.subscriberCount;
        }
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
