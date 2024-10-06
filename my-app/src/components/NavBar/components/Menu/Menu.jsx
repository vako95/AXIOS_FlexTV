import "./Menu.css"
import MenuItem from "./components/MenuItem/MenuItem";


const Menu = ({ item }) => {

    return (
        <div className="menu">
            <ul className="menu__list">
              {item.map((item,inx) => (
                <MenuItem key={inx} name={item.name} link={item.link}/>
              ))}
            </ul>
        </div>

    )
}
export default Menu;