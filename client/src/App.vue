<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/tileCalculator.png">

<h2> Tile Calculator to the Rescue.</h2>
<h3> We are here to help you with your calculations.</h3>
    
    <Calculations msg="Welcome to Tile Calculator"/>

  </div>
</template>

<script>
import Calculations from './components/Calculations.vue'

export default {
  name: 'App',
  components: {
    Calculations
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171d42;
  margin-top: 60px;
}
</style>
