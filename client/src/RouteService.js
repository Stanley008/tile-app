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
    // static insertCalculation(roomName, rooomLength ){
    static insertCalculation(roomName){
        return axios.post(url, {roomName} );
        // return axios.post(url, {roomLength},  );
    }
    // text: req.body.text,
    // roomLength: req.body.roomLength,
    // roomWidth: req.body.roomWidth,
    // roomHeight: req.body.roomHeight,
    // roomDeduction: req.body.roomDeduction,
    // tileLength: req.body.tileLength,
    // tileWidth: req.body.tileWidth,
    // tileGap: req.body.tileGap,
    // tileAdjustment: req.body.tileAdjustment,

    //Delete Calculations
    static deleteCalculation(id) {
        return axios.delete(`${url}${id}`);
    }
};

export default RouteService;