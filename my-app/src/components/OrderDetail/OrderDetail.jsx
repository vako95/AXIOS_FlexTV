import "./OrderDetail.css";

import { useEffect, useState } from "react";
import OrderService from "../../services/api/OrderService";


const OrderDetail = ({orderId}) => {
const [detail,setDetail] = useState({});


useEffect(() => {

    OrderService.getOrderID(orderId).then((reponse) => {
        setDetail(reponse)
    })
},[orderId]);

    return(
        <div className="order__detail">
          {detail ? (
           <div>  <h1>{detail.name} </h1></div>
          ): (
            <p>Заказ не найден.</p>
        )}
          
        </div>
    )
}
export default OrderDetail;