import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
