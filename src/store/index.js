import Vue from 'vue'
import Vuex from 'vuex'

import article from "@/store/modules/article";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //articleList:[],
    indexBaseData:{
      articleTotal:0
    }
  },
  mutations: {
    setIndexBaseData(state,payload){
      state.indexBaseData.articleTotal = payload.total
    }
  },
  actions: {
  },
  modules: {
    article
  }
})
