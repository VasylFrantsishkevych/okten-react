import './GenreStyle.css';
import {Link} from "react-router-dom";

const Genre = ({genre}) => {
    const {id, name} = genre;

    return (
        <Link to={`/discover/movie&language=en-US&with_genres=${id}`}>
            <span className={'genre'}>{name}</span>
        </Link>
    );
};

export {Genre};