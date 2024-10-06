import "./MoovieList.css"

import { useEffect, useState } from "react";
import MovieShow from "../../services/api/MovieShowService";
import MovieItem from "./components/MovieItem/MovieItem";
import SectionContent from "../common/SectionContent/SectionContent";


const MoovieList = () => {
    const [current, setCurrent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(current)
    useEffect(() => {
        setLoading(true);
        MovieShow.getMovie().then((response) => {
            setCurrent(response);
        }).catch((err) => {
            console.error(err);
            setError(err);
        }
        ).finally(() => {
            setLoading(false);
        });
    }, [])
    return (
        <SectionContent>
            <div className="movie">
                {current.map((item, inx) => (
                    <MovieItem key={inx} moovie={item} />
                ))}
            </div>
        </SectionContent>

    )
}
export default MoovieList;  