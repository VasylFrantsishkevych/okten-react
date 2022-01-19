import './AlbumStyle.css'
import {Link, useParams} from "react-router-dom";

const Album = ({album}) => {
    const {albumId} = useParams();
    const {userId, id, title} = album
    return (
        <div className={'album__card'}>
            <h2>userId: {userId}  id: {id}</h2>
            <h4>title: {title}</h4>
            <div className={'album__button'}>
                <Link to={`photos`}><button>Photo</button></Link>
            </div>
        </div>
    );
};

export default Album;