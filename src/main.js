import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./utils/service"

//样式
import "./assets/scss/theme-dark.scss";

Vue.config.productionTip = false
Vue.prototype.$axios = Object.freeze(service)

//指令插件的导入
import Loading from "./directive/loading/loading";
import Waves from "./directive/waves"
import Tips from './directive/tips'
import LoadingCirc from "@/directive/loading/loading-circ";
Vue.use(Loading)
Vue.use(LoadingCirc)
Vue.use(Waves)
Vue.use(Tips)

//lodash工具的使用
import _ from 'lodash'
Vue.prototype._ = _

//全局组件
import RightPanelContainer from '@/components/RightPanelContainer'
Vue.component('RightPanelContainer',RightPanelContainer)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    //document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
