
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projSum: false,
    tasks: [{id:0, name: 'task 1', status: false},
    {id:1, name: 'task 2', status: false},
    {id:2, name: 'task 3', status: false},
    {id:3, name: 'task 4', status: false},]
  },
  getters:{
    doneTasks: state=>{
      let finished = state.tasks.filter(e => e.status===true).length;
      return finished * 100/state.tasks.length;
    }
  },
  mutations: {
    open(state){
      state.projSum = !state.projSum;
    },
    markTask(state, id){
      //vue's checkbox model is directly accessing the store, this is bad.
      //but why would anyone map a checkbox directly to a vuex anyway would be a mystery
      //just handle it in the component's methods instead, then emit that value array to the
      //vuex instead

      // let x = state.tasks.findIndex(s => s.id === id);
      // console.log(x)
      // state.tasks[x].status = !state.tasks[x].status;

      console.log(state,id);
    }
  },
  actions: {
  },
  modules: {
  }
})
