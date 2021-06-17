import axios from "axios";

const url = "http://localhost:5000/api/calculations/";

class RouteService {
    //Get Calculations
    static getCalculations(){
        return new Promise(async (resolve, reject) => {
            try {
            const res = await axios.get(url);
            const data = res.data;
                resolve(
                    data.map(calculation => ({
                    ...calculation,
                    createdAt: new Date(calculation.createdAt)
                    }))
                );
            } 
            catch (err) {
            reject(err);
            }
            });
    }

    //Create Calculations
    // static insertCalculation(roomName, roomLength, roomWidth, roomHeight, roomDeduction, tileName, tileLength, tileWidth, tileGap, tileAdjustment, tileBoxPieces, tileBoxPrice){
    //     return axios.post(url, {roomName:text}, {roomLength:number}, {roomWidth:number}, {roomLength:Height}, {roomDeduction:number}, {tileName:number}, {tileLength:number}, {tileWidth:number}, {tileGap:number}, {tileAdjustment:number}, {tileBoxPieces:number}, {tileBoxPrice:number});
    // }


    // // OLD VERSION 1 INPUT
    // static insertCalculation(text, roomName, roomLength) {
    //     return axios.post(url, {
    //         text: text,

    //         // text: text ? ?
    //         roomName: roomName,
    //         roomLength: roomLength
    //         // roomWidth: roomWidth, 
    //         // roomHeight: roomHeight, 
    //         // roomDeduction: roomDeduction
    //         // text: roomName
    //     });
    // }

      // OLD VERSION 2 TRY //Manually works fine... adds correct values...  add more fields... 
      static insertCalculation(text, roomName, roomLength) {
        return axios.post(url, {
            text: text,
            roomName: roomName,
            roomLength: roomLength,
        });
    }

    //  //Create Calculations
    // static insertCalculation(text, roomName, roomLength, roomWidth, roomHeight, roomDeduction, tileName, tileLength, tileWidth, tileGap, tileAdjustment, tileBoxPieces, tileBoxPrice){
    //     return axios.post(url, {roomLength:roomLength});
    // }



    // <p class="roomName"> Room Name: {{ calculation.roomName }} </p>
    // <p class="room"> Room Length: {{ calculation.roomLength }} cm</p>
    // <p class="room"> Room Width: {{ calculation.roomWidth }} cm</p>
    // <p class="room"> Room Height: {{ calculation.roomHeight }} cm</p>
    // <p class="room"> Total Room Deduction: {{ calculation.roomDeduction }} m2</p>
    // <p class="roomName"> Tile Name: {{ calculation.tileName }} </p>
    // <p class="room"> Tile Length: {{ calculation.tileLength }} cm</p>
    // <p class="room"> Tile Width: {{ calculation.tileWidth }} cm</p>
    // <!-- <p class="room"> Tile Gap: {{ calculation.tileGap }} cm</p> -->
    // <p class="room"> Tile Adjustment Add: {{ calculation.tileAdjustment }} %</p>
    // <p class="room"> Tile Pieces in a Box: {{ calculation.tileBoxPieces }}</p>
    // <p class="room"> Tile Box Price: {{ calculation.tileBoxPrice }} CZK</p>
    

    // Delete Calculations
    static deleteCalculation(id) {
        return axios.delete(`${url}${id}`);
    }
};

export default RouteService;