import {Link} from "react-router-dom";

import './MovieInfoStyle.css';
import {StarRating} from "../StarsRating";




const MovieInfo = ({movie}) => {
    const {poster_path, id, original_title, release_date, vote_average, vote_count} = movie;

    return (
        <div className={'movie-info__card'}>
            <div className={'movie-info__card_title'}>
                <Link to={`/movie/${id}`}><h2>{original_title}</h2></Link>
            </div>
            <div className={'movie-info__card_description'}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}`}/>
                </div>
                <div className={'movie-info__card_text'}>
                    <div>
                        <h4>{original_title}</h4>
                        <h5>Data: {release_date}</h5>
                    </div>
                    <div>
                        {<StarRating/>}
                        <h5>Rating: {vote_average} (vote: {vote_count})</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};