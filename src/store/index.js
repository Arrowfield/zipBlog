import Vue from 'vue'
import Vuex from 'vuex'

import article from "@/store/modules/article";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //articleList:[],

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    article
  }
})
