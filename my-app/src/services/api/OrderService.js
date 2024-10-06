import axios from "axios";
import {BASE_URL} from "../../utils/constants";
class OrderService {

    static async getOrders(){
        const response = await axios.get(`${BASE_URL}users`);
        return response.data;
    }

    static async getOrderID(userId){
        const response = await axios.get(`${BASE_URL}users/${userId}`);
        return response.data 
    }
    static async addOrder (new_order) {
        const response = await axios.post(`${BASE_URL}users`,new_order);
        return response.data 
    }
}

export default OrderService;