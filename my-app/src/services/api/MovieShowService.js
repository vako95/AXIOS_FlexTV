import axios from "axios";
import { API_KEY, Movie_Base_Url } from "../../utils/constants";

class MovieShow{
    static  getMovie  = async(page =1) =>{
    const response = await axios.get(`${Movie_Base_Url}movie/popular${API_KEY}`,page);
    return response.data.results;
    } 
}
export default MovieShow;