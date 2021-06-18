<template>
  <div class="container">
    <div class="create-calculation">


<hr>
<p>Hints: </p>
<p>Tile Adjustment - It is advisory to order 10% more for waste, bad cuts etc.</p>
<p>Tile Adjustment - If diagonal pattern is chosen a 20% adjustment is advisory.</p>
<p>To delete a calculation doubble click on it.</p>


       <hr>
      <label for="create-calculation"> Enter New Calculation Data: </label>
      <br>
      <br>
      <!-- Test Purpose Text -->
      <!-- <input type="text" id="create-calculation" v-model="text" placeholder="Create Test TEXT"> -->
      <input type="roomName" id="create-calculation" v-model="roomName" placeholder="Room Name">
      <p></p>
      <input type="roomName" id="create-calculation" v-model="roomLength" placeholder="Room Length cm">
      <input type="roomName" id="create-calculation" v-model="roomWidth" placeholder="Room Width cm">
      <input type="roomName" id="create-calculation" v-model="roomHeight" placeholder="Room Height cm">
      <input type="roomName" id="create-calculation" v-model="roomDeduction" placeholder="Room Deduction m2">
      <br>
      <br>
      <input type="roomName" id="create-calculation" v-model="tileName" placeholder="Tile Name">
      <p></p>
      <input type="roomName" id="create-calculation" v-model="tileLength" placeholder="Tile Length cm">
      <input type="roomName" id="create-calculation" v-model="tileWidth" placeholder="Tile Width cm">
      <!-- <input type="roomName" id="create-calculation" v-model="tileGap" placeholder="Tile Gap"> -->
      <input type="roomName" id="create-calculation" v-model="tileAdjustment" placeholder="Tile Adjustment %">
      <input type="roomName" id="create-calculation" v-model="tileBoxPieces" placeholder="Tiles in Box Pieces">
      <input type="roomName" id="create-calculation" v-model="tileBoxPrice" placeholder="Tile Box Price CZK">
      <br>
      <br>
      <button v-on:click="createCalculation">Calculate</button>
    </div>

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
      <!-- Minues need to be fixed 13:06 shows as 13:6... missing 0. Bug. -->
        {{`${calculation.createdAt.getHours()}:${calculation.createdAt.getMinutes()} - ${calculation.createdAt.getDate()}.${calculation.createdAt.getMonth()+1}.${calculation.createdAt.getFullYear()}`}}
        

        <!-- Test Purpose Text -->
        <!-- <p class="roomName"> TEST TEXT FIELD INPUT: {{ calculation.text }} </p> -->
        
        <p class="roomName"> Room Name: {{ calculation.roomName }} </p>
        <p class="room"> Room Length: {{ calculation.roomLength }} cm</p>
        <p class="room"> Room Width: {{ calculation.roomWidth }} cm</p>
        <p class="room"> Room Height: {{ calculation.roomHeight }} cm</p>
        <p class="room"> Total Room Deduction: {{ calculation.roomDeduction }} m2</p>
        <p class="roomName"> Tile Name: {{ calculation.tileName }} </p>
        <p class="room"> Tile Length: {{ calculation.tileLength }} cm</p>
        <p class="room"> Tile Width: {{ calculation.tileWidth }} cm</p>
        <!-- <p class="room"> Tile Gap: {{ calculation.tileGap }} cm</p> -->
        <p class="room"> Tile Adjustment Add: {{ calculation.tileAdjustment }} %</p>
        <p class="room"> Tile Pieces in a Box: {{ calculation.tileBoxPieces }}</p>
        <p class="room"> Tile Box Price: {{ calculation.tileBoxPrice }} CZK</p>

<hr>
<p class="roomName">CALCULATIONS</p>
<!-- Gaps will be added in version v2-->
<!-- Total Room Deduction is always deducted from floor area. -->
        <p class="roomName"> Floor Area: {{([[ calculation.roomLength * calculation.roomWidth - calculation.roomDeduction * 10000] * [calculation.tileAdjustment/100+1]]/10000).toFixed(2)}} m2</p>
        <p class="roomName"> Wall Area: {{ ([[2 * calculation.roomLength * calculation.roomHeight + 2 * calculation.roomWidth * calculation.roomHeight] * [calculation.tileAdjustment/100+1]]/10000).toFixed(2)}} m2</p>
        <p class="roomName"> Total Area: {{ ([[2 * calculation.roomLength * calculation.roomHeight + 2 * calculation.roomWidth * calculation.roomHeight] * [calculation.tileAdjustment/100+1]]/10000 +[[ calculation.roomLength * calculation.roomWidth - calculation.roomDeduction * 10000] * [calculation.tileAdjustment/100+1]]/10000).toFixed(2)}} m2</p>
        <p class="roomName"> Number of Tiles Needed: {{ ([[[2 * calculation.roomLength * calculation.roomHeight + 2 * calculation.roomWidth * calculation.roomHeight] * [calculation.tileAdjustment/100+1]]/10000 +[[ calculation.roomLength * calculation.roomWidth - calculation.roomDeduction * 10000] * [calculation.tileAdjustment/100+1]]/10000]/ [calculation.tileLength*calculation.tileWidth] * 10000).toFixed(0)}} Pieces</p>
        <p class="roomName"> Number of Tiles Boxes Needed: {{ ([[[[2 * calculation.roomLength * calculation.roomHeight + 2 * calculation.roomWidth * calculation.roomHeight] * [calculation.tileAdjustment/100+1]]/10000 +[[ calculation.roomLength * calculation.roomWidth - calculation.roomDeduction * 10000] * [calculation.tileAdjustment/100+1]]/10000]/ [calculation.tileLength*calculation.tileWidth] * 10000]/calculation.tileBoxPieces).toFixed(0)}} Boxes</p>
        <p class="roomName"> Price of the Tiles: {{([[[[2 * calculation.roomLength * calculation.roomHeight + 2 * calculation.roomWidth * calculation.roomHeight] * [calculation.tileAdjustment/100+1]]/10000 +[[ calculation.roomLength * calculation.roomWidth - calculation.roomDeduction * 10000] * [calculation.tileAdjustment/100+1]]/10000]/ [calculation.tileLength*calculation.tileWidth] * 10000]/calculation.tileBoxPieces*calculation.tileBoxPrice).toFixed(0)}} CZK</p>
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
      text: "",
      roomName: "",
      // roomLength: ""
    };
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
      await RouteService.insertCalculation(this.text, this.roomName, this.roomLength, this.roomWidth, this.roomHeight, this.roomDeduction, this.tileName, this.tileLength, this.tileWidth, this.tileGap, this.tileAdjustment, this.tileBoxPieces, this.tileBoxPrice);
      ///should or not ? ? ? 
      // await RouteService.insertCalculation(this.roomName);
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
