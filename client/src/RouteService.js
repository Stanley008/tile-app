import { post } from "got";
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
        data.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt)
        }))
    );
    } catch (err) {
reject(err);
    }
});
}


    //Create Post will take only 1 parameter? 
    static insertCalculations(text){
return axios.post(url, {
    
    
text
    });
}
    //Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default RouteService;