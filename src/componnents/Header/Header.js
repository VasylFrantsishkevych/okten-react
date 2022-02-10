import './HeaderStyle.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={"/discover/movie"}>Movies</Link>
            <Link to={"/genre/movie/list"}>Genres</Link>
        </div>
    );
};

export {Header};