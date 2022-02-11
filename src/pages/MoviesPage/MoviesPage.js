import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import './MoviesPageStyle.css';
import {MovieInfo, PaginatorMovies} from "../../componnents";
import {getAllMovies} from "../../store";

const MoviesPage = () => {
    const {movies, status, error} = useSelector(state => state['movieReducer']);
    const statusLoading = status === 'pending';
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.get('page')){
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(getAllMovies(page))
    }, [searchParams])

    return (
        <div>
            <div className={'movies__container'}>
                {statusLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <PaginatorMovies/>
        </div>
    );
};

export {MoviesPage};