import { Link } from "react-router-dom";
import "./Logo.css"


const Logo = ({logo,link}) => {
    return(
       <figure className="logo">
        <Link to={link} className="logo-link">
        <img className="logo-link__img" src={logo} alt="Logo" />
        </Link>
       </figure>
    );
}
export default Logo;