<template>
  <v-app>
    <v-main>
      <transition name="fade">
      <ProjSummary v-show="this.$store.state.projSum"/></transition>
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

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100vh);
}
</style>
