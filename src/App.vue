<template>
  <v-app>
    <v-main>
      <ProjSummary v-show="this.$store.state.projSum"/>
      <Dashboard/>
    </v-main>
  </v-app>
</template>

<script>
import ProjSummary from './components/ProjSummary';
import Dashboard from './components/Dashboard';

export default {
  name: 'App',

  components: {
    ProjSummary,
    Dashboard
  },

  data: () => ({
    //
  }),

  methods: {
    open(){
      this.$store.commit('open');
    }
  }
};
</script>
