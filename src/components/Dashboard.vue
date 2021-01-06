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
        <Messaging/>
      </div>
      <div class="widgets">
        <Widgets/>
      </div>
    </div>
    </div>

</template>

<script>
import Tasklist from './Tasklist';
import Messaging from './Messaging';
import Widgets from './Widgets';

export default {
  name: "Dashboard",
  components: {Tasklist,
  Messaging,
  Widgets},
  data: () =>
    Messaging({

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
  width: 100vw;
  height: 100%;
  background-color: #CFD8DC;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
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
  flex-direction: column;
  justify-items: center;

    .tasklist{
      background-color: white;
      padding: 10px;
      margin-bottom: 10px;
    }
    .messaging{
      background-color: white;
      padding: 10px;
      margin-bottom: 10px;
    }
    .widgets{
      background-color: white;
      

      padding: 10px;
    }
}

// Small devices (landscape phones, 576px and up)

@media (min-width: 576px) {
  .widgets{
    display: none;
  }
}

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
  .content{
  height: 70vh;
  flex-direction: row;
  flex-wrap: nowrap;

  .tasklist{
    margin: 10px 10px 0 0;
  }
  
  .messaging{
    margin: 10px 10px 0 10px;
  }
}

}

// Large devices (desktops, 992px and up)

@media (min-width: 992px) { 
  .content{
    height: 80vh;
    flex-wrap: nowrap;
    align-items: stretch;

    .tasklist{
      flex: 1;
    }
    
    .messaging{
      flex: 2;
    }
  }


}

// Extra large devices (large desktops, 1200px and up)

@media (min-width: 1200px) {
.content{
  height: 75vh;
  flex-wrap: nowrap;
}
.widgets{
  display: flex;
  flex: 1;
  margin: 10px 0 0 10px;
}
}
</style>