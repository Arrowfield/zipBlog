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

// 全局过滤器
import * as filters from '@/filters/dataFormat'

Object.keys(filters).forEach(key=>{
  console.log(key)
  Vue.filter(key,filters[key])//插入过滤器名和对应方法
})

//lodash工具的使用
import _ from 'lodash'
Vue.prototype._ = _

//全局组件
//import RightPanelContainer from '@/components/RightPanelContainer'

import i18n from './i18n'
//Vue.component('RightPanelContainer',RightPanelContainer)

new Vue({
  router,
  store,
  render: h => h(App),
  i18n,

  mounted() {
    //document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
