<template>
  <div id="app">
    <img alt="Tile Calculator logo" src="./assets/tileCalculator.png">
    <h2> Tile Calculator to the Rescue.</h2>
<h3> We are here to help you with your calculations.</h3>

    <!-- big CC  ? ? ?  -->
<CalculationComponent>
  </CalculationComponent>
  </div>
</template>

<script>
import CalculationComponent from './components/CalculationComponent.vue'
// import Calculation from './components/CalculationComponent.vue'

export default {
  name: 'App',
  components: {
    CalculationComponent
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
  margin-top: 65px;
}
</style>
