<template>
  <div class="container">
    <h1>Latest Calculations</h1>
    <div class="create-calculation">
      <label for="create-calculation"> Enter New Calculation Data: </label>
      <input type="text" id="create-calculation" v-model="text" placeholder="Create Calculation">
<button v-on:click="createCalculation">Calculate</button>
    </div>
<!-- create calculations here -->
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="calculations-container">
      <div class="calculation"
        v-for="(calculation, index) in calculations"
        v-bind:item="calculation"
        v-bind:index="index"
        v-bind:key="calculation._id"
        v-on:dblclick="deleteCalculation(calculation._id)"

      >
        {{`${calculation.createdAt.getHours()}:${calculation.createdAt.getMinutes()} - ${calculation.createdAt.getDate()}
        .${calculation.createdAt.getMonth()+1}.${calculation.createdAt.getFullYear()}`}}
        <p class="text"> {{ calculation.text }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import RouteService from "../RouteService";

export default {
  name: 'CalculationComponent',
  data(){
    return {
      calculations: [],
      error: "",
      text: ""
    }
  },
  async created(){
    try {
this.calculations = await RouteService.getCalculations();
    } catch(err) {
      this.error = err.message;
  }
},
  methods: {
    async createCalculation(){
      await RouteService.insertCalculation(this.text);
      this.calculations = await RouteService.getCalculations();
    },
    
    async deleteCalculation(id){
      await RouteService.deleteCalculation(id)
      // await RouteService.deletePost(id)
      this.calculations = await RouteService.getCalculations();
    },
  },
};
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff0004;
  background-color: #fd9088;
  padding: 15px;
  margin-bottom: 20px;
}

div.calculation {
  position: relative;
  border: 2px solid #00f7ff;
  background-color: #b5f8fd;
  padding: 15px 15px 25px 15px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 15px 10px 15px;
  background-color: #00f7ff;
  color: white;
  font-size: 15px;
}

p.text{
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 0;
}
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 50px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
}
a {
  color: #00edf5;
}
</style>
