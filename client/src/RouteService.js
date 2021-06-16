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
    static insertCalculation(text){
        return axios.post(url, {text: text});
    }

    //where is fault ? ? ? ?
    //Delete Calculations
    static deleteCalculation(id) {

        // static deleteCalculation(_id) {
        // static deleteCalculation(calculation) {
      
        return axios.delete(`${url}${id}`);
        // return axios.delete(`${url}+${id}`);
        // return axios.delete(`${URL}+${id}`);
        // return axios.delete({url}+ {id});
        // return axios.delete(url+ id);
    }
};

export default RouteService;