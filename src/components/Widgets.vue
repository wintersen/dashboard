<template>
  <div class="widgetcontainer">
    <div class="widgetheader">
      <h2>Widgets</h2>
      <v-icon large>mdi-cog</v-icon>
    </div>
    <div class="widgetholder">
      <div class="widget widget1">
        <v-progress-circular size="100" width="15" v-model="circle" color="blue"></v-progress-circular>
        <h4 id="marghead">Public Opinion</h4>
      </div>
      <div class="widget">
        <v-sparkline :value="line" height="25" width="50" smooth="100" stroke-linecap="round" line-width="1" type="trend" auto-draw></v-sparkline>
        <h4>General Excitement</h4>
      </div>
      <div class="widget">
        <v-img alt="a cute dog" src="../assets/dog.png" height="75" contain></v-img>
        <h4>A Cute Dog</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Widgets',
  data: () => ({
    circle: 10,
    line: [2,4,15,5,2,4,5,1]

  }),
  mounted ()  {
    setInterval(() => {
      this.circle = Math.floor(Math.random() * Math.floor(100))
      this.line.push(this.line.splice(0,1)[0])
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.widgetcontainer{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .widgetheader{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px
  }

  

  .widgetholder{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    .widget{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      text-align: center;
      justify-content: flex-end;

    h4{
      margin-top: 5px;
    }

    .widget1{
      align-self: center;
    }
  }
  }
  
}

#marghead {
  margin-top: 35px;
}
@media (min-width: 576px) {
  .widgetholder{
    flex-direction: row;

    .widget{
      flex: 1;
    }
  }
}

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
.widgetcontainer {
    .widgetholder{
    flex-direction: row;
  }
  }
}

// Large devices (desktops, 992px and up)

@media (min-width: 992px) { 
  
  
}

// Extra large devices (large desktops, 1200px and up)

@media (min-width: 1200px) {
.widgetcontainer {
    .widgetholder{
    flex-direction: column;
  }
  }
}
</style>