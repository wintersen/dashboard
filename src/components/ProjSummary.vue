<template>
<div class="bg">
  <div class="holder">
    <div class="close"><v-icon @click="close()" id="closebutton" large>mdi-close</v-icon></div>
    <h3>Project Details</h3>
    <h4>Overview</h4>
    <section>
      <p>This is a mock-up dashboard used as practice to brush up on skills I've used in the past, but want a firmer understanding of.  
        The goal with this project was to avoid using a framework for grids, and instead rely only on flex and grid CSS.  
        The other goal was to use Vuex to understand how it integrates into a project and its setup process.  While Vuex is not really 
        meant for such a small application, I was focused on the general usage of Vuex overall.</p>
    </section>
    <h4>Workflow</h4>
    <section>
      <p>To begin, I started with a wireframe mock-up I created to quickly note down the kind of components I would need and visualize 
        how the data would be displayed.
      </p>
      <v-img alt="Screenshot of Mockup" src="../assets/mock.png"></v-img>
      <p>The next step was to set up a Vue project, which I accomplished using Vue's CLI tool.  With a little research into how media breakpoints 
        are defined and can be used, as well as some tips regarding mixing grids and flexbox, I began to transfer the wireframe's individual portions 
        into Vue components.  Those were then assembled into the general structure of the site, and once I was pleased with the layout, I began some basic 
        styling and handling reactive sizing.</p>
      <p>Once I was satisfied with the basic layout, I moved on to incorporating Vuex.  While the usage of my store was very basic and straightforward, especially 
        considering the small scale of my application, I simulated user interaction to be sure I understood how mutating the store worked.
      </p>
    </section>
    <h4>Thoughts</h4>
    <section>
      <p></p>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: "ProjSummary",
  data: () => ({

  }),
  methods: {
    close(){
      this.$store.commit('open');
    }
  }
}
</script>

<style lang="scss" scoped>
.bg{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 100%;
  width: 100%;
}

.close{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  #closebutton{
    display: flex;
  }
}

.holder{
  overflow-y: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 90%;
  width: 90%;
}

// Small devices (landscape phones, 576px and up)

@media (min-width: 576px) {}

// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {}

// Large devices (desktops, 992px and up)

@media (min-width: 992px) { 
  .holder{
    
  padding: 50px;
  height: 80%;
  width: 70%;
}
 }

// Extra large devices (large desktops, 1200px and up)

@media (min-width: 1200px) {
.holder{
  
  padding: 50px;
  height: 80%;
  width: 70%;
}
}

</style>