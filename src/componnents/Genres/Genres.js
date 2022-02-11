import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './GenresStyle.css';
import {getAllGenres} from "../../store";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    const statusLoading = status === 'pending';


    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    return (
        <div>
            {statusLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <div className={'genres'}>{
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }</div>
        </div>
    );
};

export {Genres};