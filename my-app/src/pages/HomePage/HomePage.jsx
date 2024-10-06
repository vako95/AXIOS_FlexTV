
import MoovieList from "../../components/MoovieList/MoovieList";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = () => {

    return(
        <div className="home-page">
         <NavBar />
         <MoovieList />
        </div>
    )
}
export default HomePage;