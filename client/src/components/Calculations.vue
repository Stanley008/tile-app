<template>
  <div class="container">
    <h1>Latest Calculations</h1>
<!-- create calculations here -->
<hr>
<p class="error" v-if="error">{{error}}</p>
<div class="calculations-container">
  <div class="calculation"
  v-for="(calculation, index) in calculations"
  v-bind:item="calculation"
  v-bind:index="index"
  v-bind:key="calculation._id"
  >
  {{`${calculation.createdAt.getHours()}:${calculation.createdAt.getMinutes()} ${calculation.createdAt.getDate()}.${calculation.createdAt.getMonth()}.${calculation.createdAt.getFullYear()}`}}
  <p class="text"> {{calculation.text}}</p>
  </div>
  </div>
    </div>
</template>


<script>
import RouteService from "../RouteService";


export default {
  name: 'Calculations',
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
    }
    catch(err) {
      this.error = err.message;
  }
  // props: {
  //   msg: String
  // }
}
}
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

div.post {
  position: relative;
  border: 2px solid #21c1e9;
  background-color: #94c5fd;
  padding: 15px 15px 25px 15px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 15px 10px 15px;
  background-color: #00e1ff;
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
