import axios from "axios";

// Local Use
// const url = "http://localhost:5000/api/calculations/";

// Heroku Use
// const url = "/api/calculations/";
const url = "api/calculations/";

class RouteService {
    // Get Calculations
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

    // TEST VERSION  - 1 INPUT
    // static insertCalculation(text) {
    //     return axios.post(url, {
    //         text: text
    //     });
    // }

// Create Calculation 
static insertCalculation(text, roomName, roomLength, roomWidth, roomHeight, roomDeduction, tileName, tileLength, tileWidth, tileGap, tileAdjustment, tileBoxPieces, tileBoxPrice) {
    return axios.post(url, {
        text: text,
        roomName: roomName,
        roomLength: roomLength,
        roomWidth: roomWidth,
        roomHeight: roomHeight,
        roomDeduction: roomDeduction,
        tileName: tileName,
        tileLength: tileLength,
        tileWidth: tileWidth,
        tileGap: tileGap,
        tileAdjustment: tileAdjustment,
        tileBoxPieces: tileBoxPieces,
        tileBoxPrice: tileBoxPrice
        });
}

    // Delete Calculations
    static deleteCalculation(id) {
        return axios.delete(`${url}${id}`);
    }
};

export default RouteService;