import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projSum: true,
  },
  mutations: {
    open(state){
      state.projSum = !state.projSum;
    }
  },
  actions: {
  },
  modules: {
  }
})
