import "./MovieItem.css";
import { SMALL_IMG } from "../../../../utils/constants";
import FiveStarRaiting from "../../../FiveStarRaiting/FiveStarRaiting";


const MovieItem = ({ moovie }) => {
    console.log(moovie)
    return (
        <div className="moovie__item">
            <div className="movie__item-poster">
                <figure className="movie__item-poster-backdrop">
                    <img className="movie__item-poster-backdrop-img" src={SMALL_IMG + moovie?.backdrop_path} alt="" />
                </figure>
                <div className="moovie__item-heading">
                    <figcaption className="moovie__item-heading-title"> {moovie.title}</figcaption>
                    <strong className="moovie__item-heading-raiting"><FiveStarRaiting rating={moovie.vote_average} /></strong>
                    <span className="moovie__item-heading-raiting-math">{moovie.vote_average / 2} /5</span>
                    <meter  className="moovie__item-heading-raiting-math" value={moovie.vote_average} min="0" max="10"></meter>
                    <details className="moovie__item-heading-details"><p className="moovie__item-heading-details-description">{moovie.overview}</p></details>
                </div>
            </div>



        </div>
    )
}

export default MovieItem;