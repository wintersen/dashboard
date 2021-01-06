
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projSum: false,
    tasks: [{id:0, name: 'Be a good citizen', status: false},
    {id:1, name: 'Observe neighbors', status: false},
    {id:2, name: 'Perform daily rituals', status: false},
    {id:3, name: 'Buy items of various worth', status: false},
    {id:3, name: 'Call your mother', status: false},
    {id:3, name: 'Turn yourself into the authorities', status: false},],
    messages: [
      {id: 0, title: 'IMPORTANT NOTICE', from: 'Big Brother', body: 'Wanted felon BOB JOHNSON has been identified as one of your acquaintances. An agent will arrive between the hours of 1PM and 3PM to obtain your information and testimony. If you fail to appear, you will be labelled as an accomplice.', wasRead: false, important: true},
      {id: 1, title: 'Weekly Community Update', from: 'Pristine Place HOA', body: 'Garage Sales in your area! Gardening tips to keep your lawn perfect! New gossip about neighbors!', wasRead: false, important: false},
      {id: 2, title: 'Pls respond asap', from: 'Bob Johnson', body: 'They\'re coming there\'s no time you need to message me back', wasRead: false, important: false},
      {id: 3, title: 'Order 281634 has shipped', from: 'Amazoon', body: 'Dear Amazoon customer, your order (ID 281634) BIG POPPAS BIG BOOMSTICK has shipped successfully.  This package will require a show of personal id and signature upon delivery.  Thank you for picking Amazoon, your only choice in online shopping!', wasRead: true, important: false},
      {id: 4, title: 'Did you get my email?', from: 'Bob Johnson', body: 'Hey, I sent you an email earlier, but got no response...  I need you to call me, this is serious', wasRead: false, important: false},
      {id: 5, title: 'Hey', from: 'Bob Johnson', body: 'I know you are always telling me to stay out of trouble and that last time was the last time, but... I did something stupid.  Please help me out', wasRead: true, important: false},
    ]
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
    },
    addTask(state, task){
      let id = state.tasks.length;
      state.tasks.push({id: id, name: task, status: false});
    },

  },
  actions: {
  },
  modules: {
  }
})
