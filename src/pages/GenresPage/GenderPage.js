import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import './GenrePageStyle.css';
import {getAllGenres, getMovieGenres} from "../../store";
import {Genre, MovieInfo, PaginatorGenres} from "../../componnents";
import {useSearchParams} from "react-router-dom";

const GenderPage = () => {
    const {genres, status, error, genresMovie} = useSelector(state => state['genresReducer']);
    const {id} = useParams();
    const dispatch = useDispatch();
    const statusLoading = status === 'pending';
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.get('page')){
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(getAllGenres())
        dispatch(getMovieGenres({id, page}))
    }, [searchParams])

    return (
        <div>
            {statusLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <div className={'genres'}>{
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }</div>
            <div className={'movies__container'}>
                {genresMovie.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <PaginatorGenres/>
        </div>
    );
};

export {GenderPage};