import OrderDetail from "../../components/OrderDetail/OrderDetail";
import "./OrderDetailPage.css";
import {  useParams } from "react-router-dom";

const OrderDetailPage = () => {
const { orderId } = useParams();


   return(
    <div className="order-detail">
    
<OrderDetail orderId={orderId}/>

</div>
   )
}
export default OrderDetailPage;


