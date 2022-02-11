import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useParams} from "react-router";

import './MoviesPageStyle.css';
import {Genres, MovieInfo, Paginator} from "../../componnents";
import {getAllMovies} from "../../store";

const MoviesPage = () => {
    const {movies, status, error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const statusLoading = status === 'pending';

    useEffect(() => {
        if (!searchParams.get('page')){
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(getAllMovies({id, page}))
    }, [id, searchParams])

    return (
        <div>
            <Genres/>
            <div className={'movies__container'}>
                {statusLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <Paginator/>
        </div>
    );
};

export {MoviesPage};