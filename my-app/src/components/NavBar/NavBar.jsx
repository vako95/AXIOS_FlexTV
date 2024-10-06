import "./NavBar.css"
import logo from "./assets/img/logos.jpeg";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";

const NavBar = () => {

    const items = [
        {
            "name":"Home",
            "link":"/",
            "collapsed":[]
        },
        {
            "name":"About",
            "link":"/about",
            "collapsed":[]
        },
        {
            "name":"Order",
            "link":"/order",
            "collapsed":[]
        },
    ]
    return(
        <div className="nav__bar">
          <Logo logo={logo}/>
          <Menu item={items}/>
        </div>
    )
}

export default NavBar;