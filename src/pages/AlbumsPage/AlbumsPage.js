import {useEffect, useState} from 'react';

import './AlbymsPage.css'
import {userService} from "../../services/user.servise";
import {useParams} from "react-router-dom";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsUserId(id).then(value => setAlbums(value))
    },[albums])

    return (
        <>
            <h1>Albums</h1>
            <div className={'albums'}>
                {
                    albums.map(album => <Album key={album.id} album={album}/>)
                }
            </div>
        </>
    );
};

export {AlbumsPage};