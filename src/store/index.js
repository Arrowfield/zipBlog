import Vue from 'vue'
import Vuex from 'vuex'

import article from "@/store/modules/article";
import caseDetail from '../views/Test/store/index'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //articleList:[],
    indexBaseData:{
      articleTotal:"-"
    },
    tags:[],
    showLoading:false,
    bgColors: [
      "rgba(255,78,106,.15)",
      "rgba(255,170,115,.15)",
      "rgba(254,212,102,.15)",
      "rgba(60,220,130,.15)",
      "rgba(100,220,240,.15)",
      "rgba(100,185,255,.15)",
      "rgba(180,180,255,.15)",
      "rgba(255,78,106,.15)"
    ],
    textColors: [
      "rgba(255,78,106,.8)",
      "#ffaa73",
      "#fed466",
      "#3cdc82",
      "#64dcf0",
      "#64b9ff",
      "#b4b4ff",
      "rgba(255,78,106,.8)"
    ],
  },
  mutations: {
    setIndexBaseData(state,payload){
      state.indexBaseData.articleTotal = payload.total
    },
    setTags(state,tags){
      if(Array.isArray(tags)) {
        state.tags = tags
      }
    },
    setLoading(state,value){
      state.showLoading = value
    }
  },
  actions: {
  },
  modules: {
    article,
    caseDetail
  }
})
