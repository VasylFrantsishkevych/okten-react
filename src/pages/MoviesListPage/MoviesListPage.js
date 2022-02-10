import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMoviesById} from "../../store";
import {MoviesListCard} from "../../componnents";


const MoviesListPage = () => {
    const {id} = useParams();
    const {movieId, status} = useSelector(state => state['movieReducer']);
    const statusLoading = status === 'pending';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesById(id))
    }, [])

    return (
        <div>
            {statusLoading && <h2>Loading...</h2>}
            {
                movieId.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesListPage};