<template>
  <div class="container">
    <div class="header">
      <h1>Personal Dashboard</h1>
      <v-icon @click="open()" color="black">mdi-help</v-icon>
    </div>
    <div class="maininfo">
      <div class="assistant">
          <v-icon x-large>mdi-face</v-icon>
          <span>hi there!</span>
      </div>
      <div class="weather">
        <h4>Today's Scheduled Weather</h4>
        <v-icon x-large>mdi-cloud</v-icon>
      </div>
      <div class="meals">
        <h4>Today's Scheduled Meal Allotments</h4>
        <div><v-icon x-large>mdi-food</v-icon><v-icon x-large>mdi-food</v-icon><v-icon x-large>mdi-food</v-icon></div>
      </div>
    </div>
    <div class="content">
      <div class="tasklist">
        <Tasklist/>
      </div>
      <div class="messaging">
mes
      </div>
      <div class="widgets">
wjhd
      </div>
    </div>
    </div>

</template>

<script>
import Tasklist from './Tasklist';

export default {
  name: "Dashboard",
  components: {Tasklist},
  data: () =>({

  }),
  methods: {
    open(){
      this.$store.commit('open');
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  background-color: gray;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.maininfo{
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;

  .assistant{
    flex-direction: row;
    align-items: center;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;

    div{
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.content{
  display: flex;
  flex-direction: row;
  justify-items: center;

    .tasklist{
      background-color: white;
      margin: 10px 10px 0 0;
      flex: 1;
      padding: 10px;
    }
    .messaging{
      background-color: white;
      margin: 10px;
      flex: 3;
      padding: 10px;
    }
    .widgets{
      background-color: white;
      margin: 10px 0 0 10px;
      flex: 1;
      padding: 10px;
    }
}
</style>