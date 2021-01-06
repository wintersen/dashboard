<template>
  <div class="widgetcontainer">
    <h2>Widgets</h2>
    <div class="widgetholder">
      <div class="widget">
      <v-progress-circular size="100" width="15" v-model="circle" color="blue"></v-progress-circular>
      <h4>Public Opinion</h4>
    </div>
    <div class="widget">
      <v-sparkline :value="line" height="200" smooth="100" stroke-linecap="round" line-width="10" type="trend" auto-draw></v-sparkline>
      <h4>General Excitement</h4>
    </div>
    <div class="widget">
      <v-img src="../assets/dog.png"></v-img>
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
    line: [20,40,15,50,20,40,50,10]

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

  h2{
    align-self: flex-start;
  }

  .widgetholder{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .widget{
    margin-bottom: 20px;
    text-align: center;

    h4{
      margin-top: 5px;
    }
  }
  }
  
}
</style>