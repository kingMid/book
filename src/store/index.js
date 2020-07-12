import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      userName:'未登录'
    },
    incom:0,
    expent:0,
    AllNote:{

    }
  },
  getters:{

  },
  mutations: {
    changeLogin(state,status){
      state.userInfo = status;
    },
    changeI(state,incom){
      state.incom =incom;
     
    },
    changeE(state,expent){
      state.expent =expent;
    },
    changeList(state,AllNote){
      state.AllNote =AllNote;
    }


  },
  actions: {
    loginAction({commit},user){
      commit('changeLogin',user);
    },
    onNoteI({commit},incom){
      commit('changeI',incom);
     
    },
    onNoteE({commit},expent){
      commit('changeE',expent);
    },
    onNoteAll({commit},AllNote){
      commit('changeList',AllNote);
    }
   
  },
  modules: {
  }
})
