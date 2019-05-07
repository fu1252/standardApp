import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    elemArr:[],
    testStr:123,
  },
  mutations:{
    putData(state,param){
      state.elemArr.push(param)
    },
    putNum(state,param){
      state.testStr=param
    },
  },

})

export default store