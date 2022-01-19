import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Photo from "../../components/Photo/Photo";

const PhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getPhotoAlbumId(albumId).then(value => setPhotos([...value]))
    }, [photos])

    return (
        <div>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export {PhotosPage};