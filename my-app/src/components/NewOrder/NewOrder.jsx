import { useState } from "react";
import "./NewOrder.css";
import OrderService from "../../services/api/OrderService";

const NewOrder = () => {
    const [newOrder, setNewOrder] = useState({
        name: "",
        order: ""
    });

    const handleOrder = (e) => {
        e.preventDefault();
        OrderService.addOrder(newOrder).then(() => {
            setNewOrder({name:"", order:""});
        }).catch((error) => {
            console.error("Ошибка", error);
        })
       
    }

    return (
  
<div id="form-main">
  <div id="form-div">
    <form className="form" id="form1" onSubmit={handleOrder} >
      
      <p className="name">
      <input 
         value={newOrder.name}
         onChange={(e) => setNewOrder({...newOrder,  name: e.target.value})}
         type="text" 
         className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
         />
      </p>
      
      <p className="email">
      <input 
              value={newOrder.order}
         onChange={(e) => setNewOrder({...newOrder,  order: e.target.value})}
         type="text" 
         className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
         />
      </p>
      <div className="submit">
      <input type="submit" value="SEND" id="button-blue" />
      
      </div>
    </form>
  </div>
  </div>


    )
}


export default NewOrder;