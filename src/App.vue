<template>
    <v-app id="app">
      <div class="subscriber-container">
        <subscriber-count :count="this.count"></subscriber-count>
      </div>
    </v-app>
</template>

<script>
import axios from 'axios'
import SubscriberCountVue from './components/SubscriberCount.vue';

export default {
  name: 'app',
  data() {
    return {count: '', username: 'PewdiePie'}
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
      const response = await axios.get('/api/getYTInfo?username=' + this.username);

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
  color: #2c3e50;
  font-size: 16px;
}
.subscriber-container {
  text-align: center;
  margin-top: 60px;
}
</style>
