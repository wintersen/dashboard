<template>
  <div class="taskcontainer">
    <h2>Today's Tasks</h2>
    <v-progress-linear rounded height="10" v-model="this.$store.getters.doneTasks"></v-progress-linear>
    <div class="list">
      <v-checkbox v-for="(task,i) in this.$store.state.tasks" :key="i" v-model="task.status" :label="`${task.name}`" @click="markTask(task.id)"></v-checkbox>
    </div>
    
    </div>
</template>

<script>
export default {
  name:'Tasklist',
  data: ()=> ({

  }),
  methods: {
    markTask(id){
      this.$store.commit('markTask', id)
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
}
</style>