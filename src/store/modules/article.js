export default {
  state:{
    articleList:[]
  },
  mutations:{
    setArticleVal(state,payload){

    },
    setDatalist(state,datalist){
      if(Array.isArray(datalist)){
        state.articleList = datalist
      }
    }
  },
  namespaced:true
}
