import axios from "axios";
class Shoeservice{
    static async addShoe(data){
        return await axios.post('http://localhost:3080/api/addShoe',data)
    }
    static async updateShoe(data,id){
        return await axios.post("http://localhost:3080/api/updateProduct/"+id,data)
    }
    

} export default Shoeservice;