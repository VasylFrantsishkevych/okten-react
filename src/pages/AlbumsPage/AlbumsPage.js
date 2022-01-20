import {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import './AlbymsPage.css'
import {userService} from "../../services/user.servise";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsUserId(id).then(value => setAlbums(value))
    },[id])

    return (
        <>
            <h1>Albums</h1>
            <div className={'albums'}>
                {
                    albums.map(album => <Album key={album.id} album={album}/>)
                }
            </div>
            <Outlet/>
        </>
    );
};

export {AlbumsPage};