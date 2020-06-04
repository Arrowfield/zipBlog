import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "@/utils/service";

Vue.config.productionTip = false
Vue.prototype.$axios = Object.freeze(service)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')