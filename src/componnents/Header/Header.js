import {Link} from "react-router-dom";

import './HeaderStyle.css';

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={"/discover/movie"}>Movies</Link>
        </div>
    );
};

export {Header};