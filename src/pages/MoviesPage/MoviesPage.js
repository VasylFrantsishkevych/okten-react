import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './MoviesPageStyle.css';
import {MovieInfo} from "../../componnents";
import {getMoviesGenres} from "../../store";

const MoviesPage = () => {
    const {movies, status, error} = useSelector(state => state['movieReducer']);

    const statusLoading = status === 'pending';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesGenres())
    }, [])

    return (
        <div className={'movies__container'}>
            {statusLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {
                movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesPage};