<template>
  <div class="container">
    
    <div class="create-calculation">
      <label for="create-calculation"> Enter New Calculation Data: </label>
      <input type="roomName" id="create-calculation" v-model="roomName" placeholder="Create Calculation">
<button v-on:click="createCalculation">Calculate</button>
    </div>
<!-- create calculations here -->
<!-- <div v-for="k in Object.keys(a).sort()">{{k}}:{{a[k]}}</div> -->
<!-- v-for="(calculation, index) in Object.keys(calculations).sort()"> {{calculation}}:{{calculations[calculation]}}  -->

 <!-- <div v-for="calculation in calculations">
    {{calculation[calculations]}}
  </div> -->


    <hr>
    <h1>Latest Calculations</h1>
    <p class="error" v-if="error">{{error}}</p>
    <div class="calculations-container">
      
      <div class="calculation"
        v-for="(calculation, index) in calculations" 
       
         
        v-bind:item="calculation"
        v-bind:index="index"
        v-bind:key="calculation._id"
            
        v-on:dblclick="deleteCalculation(calculation._id)"
      >
      <!-- not working -->
      <!-- {{ calculation[key] }} -->
      <!-- {{calculation[calculations]}} -->
      
        {{`${calculation.createdAt.getHours()}:${calculation.createdAt.getMinutes()} - ${calculation.createdAt.getDate()}
        .${calculation.createdAt.getMonth()+1}.${calculation.createdAt.getFullYear()}`}}
        <p class="roomName"> Room Name: {{ calculation.roomName }} </p>
        <p class="room"> Room Length: {{ calculation.roomLength }} cm</p>
        <p class="room"> Room Width: {{ calculation.roomWidth }} cm</p>
        <p class="room"> Room Height: {{ calculation.roomHeight }} cm</p>
        <p class="room"> Room deduction: {{ calculation.roomDeduction }} m2</p>

        <p class="roomName"> Tile Name: {{ calculation.tileName }} </p>
        <p class="room"> Tile Length: {{ calculation.tileLength }} cm</p>
        <p class="room"> Tile Width: {{ calculation.tileWidth }} cm</p>
        <p class="room"> Tile Gap: {{ calculation.tileGap }} cm</p>
        <p class="room"> Tile Adjustment: {{ calculation.tileAdjustment }} %</p>

        <p>TESTING PURPOSE CALCULATIONS</p>


<!-- <script>
document.getElementById("demo").innerHTML = obj.name;
</script> -->
        <!-- <script>
        var total = parseFloat(firstNumber) + parseFloat(secondNumber);
        </script> -->
        

        <p class="roomName"> Floor Area: {{ calculation.roomLength / calculation.roomWidth }} m2</p>
        <p class="roomName"> Room (Floor+Walls) Area: {{ calculation.roomLength / calculation.roomWidth }} m2</p>

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
      roomName: "",
      roomLength: ""
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

p.roomName{
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 0;
}

p.room{
  font-size: 14px;
  font-weight: 400;
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
