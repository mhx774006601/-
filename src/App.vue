<template>
  <div id="app">
   
    <router-view> </router-view>
    <!-- <custom></custom>  -->
  </div>
</template>

<script>
// import custom from './components/custom.vue'
export default {
  name: 'App',
  components: {
    // custom
  },
  data() {
    return {
     data: []
    }
  }
  
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  font-size:30px;
}
</style>
