<template>
  <div class="container">
    <div class="header">
      <h1>Personal Dashboard</h1>
      <v-icon @click="open()" color="black" style="padding-right: 20px">mdi-help</v-icon>
    </div>
    <div class="maininfo">
      <div class="assistant widediv">
          <v-icon x-large>mdi-face</v-icon>
          <div class="speechbubble">
            <span>Welcome back!  You have an important message.</span>
          </div>
      </div>
      <div class="weather widediv">
        <h4>Today's Scheduled Weather</h4>
        <v-icon x-large>mdi-cloud</v-icon>
      </div>
      <div class="meals widediv">
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
    <div class="widgetsformedium">
        <Widgets/>
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
    ({

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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;

  .assistant{
    flex-direction: row;
    align-items: center;

    .speechbubble{
      position: relative;
      text-align: left;
      border-radius: 10px;
      background-color: #ECEFF1;
      padding: 5px 5px 5px 10px;
      margin-left: 10px;
    }
    .speechbubble::after{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #ECEFF1;
      border-left: 0;
      margin-top: -10px;
      margin-left: -10px;
    }
  }

  div{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    margin-bottom: 10px;

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
.widgetsformedium{
  margin-top: 20px;
  background-color: white;
  display: none;
}

// Small devices (landscape phones, 576px and up)

@media (min-width: 576px) {
  .widgets{
    display: none;
  }
  .widgetsformedium{
    display: flex;
  }
}

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
  .maininfo{
    .widediv{
      width: auto;
    }
  }

  .content{
  height: 70vh;
  flex-direction: row;
  flex-wrap: nowrap;

  .tasklist{
    margin: 10px 10px 0 0;
  }
  
  .messaging{
    margin: 10px 0px 0 10px;
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
.maininfo{
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  height: 75vh;
  flex-wrap: nowrap;
}
.widgets{
  display: flex;
  flex: 1;
  margin: 10px 0 0 20px;
}

.widgetsformedium{
    display: none;
  }
}
</style>