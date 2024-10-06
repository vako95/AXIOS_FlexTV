import "./Order.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderService from "../../services/api/OrderService";


const Order = () => {
    const [userOrder, setUserOrder] = useState([]);
    
    useEffect(() => {
        
        OrderService.getOrders().then((response) => {
            setUserOrder(response)
        })
    }, [])

    return (
        <div className="orders">
            <table className="order">
            <tbody>
                <Link to="/new-order">New</Link>
                
                <tr>
                    <th>ID</th>
                    <th>Person</th>
                    <th>Order</th>
                
                </tr>
                    {userOrder.map((task,index) => (
                        <tr key={index}>
                         <td><Link  to={`/single-order/${task?.id}`}><p>ID: {parseInt(task.id)}</p> </Link></td>
                            <td>{task.name}</td>
                            <td>{task.order}</td>    
                            <td><img width={150} src={task.img} alt="" /></td>
                        </tr>
                             ))}
                    </tbody>
           
            </table>

        </div>

    )
}

export default Order;