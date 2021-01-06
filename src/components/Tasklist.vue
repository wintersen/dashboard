<template>
  <div class="taskcontainer">
    <h2>Today's Tasks</h2>
    <v-progress-linear rounded height="10" v-model="this.$store.getters.doneTasks"></v-progress-linear>
    <div class="list">
      <v-checkbox v-for="(task,i) in this.$store.state.tasks" :key="i" v-model="task.status" :label="`${task.name}`" @click="markTask(task.id)"></v-checkbox>
    </div>
    <v-text-field v-model="newTask" label="Type in new task" append-outer-icon="mdi-plus" @click:append-outer="addNewTask()"></v-text-field>
  </div>
</template>

<script>
export default {
  name:'Tasklist',
  data: ()=> ({
    newTask: ''
  }),
  methods: {
    markTask(id){
      this.$store.commit('markTask', id);
    },
    addNewTask(){
      this.$store.commit('addTask', this.newTask);
    }
  }
}
  
  
  </script>
<style lang="scss" scoped>
.taskcontainer{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  .list{
    overflow-x: auto;
  }
}

</style>