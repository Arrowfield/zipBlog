import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


const service = axios.create({
  baseURL:"http://127.0.0.1:8081/api",
  timeout:5000
})

Vue.config.productionTip = false
Vue.prototype.$axios = Object.freeze(service)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
