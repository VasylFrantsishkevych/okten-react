import {Link} from "react-router-dom";

import './AlbumStyle.css'

const Album = ({album}) => {

    const {userId, id, title} = album

    return (
        <div className={'album__card'}>
            <h2>userId: {userId}  id: {id}</h2>
            <h4>title: {title}</h4>
            <div className={'album__button'}>
                <Link to={`${id}/photos`}><button>Photo</button></Link>
            </div>
        </div>
    );
};

export default Album;