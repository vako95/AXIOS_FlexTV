import { NavLink } from "react-router-dom";
import "./MenuItem.css"

const MenuItem = ({name,link}) => {

    return(
        <li className="menu__item">
         <NavLink className="menu__item-link" to={link}>{name}</NavLink>
        </li>
    )
}
export default MenuItem;