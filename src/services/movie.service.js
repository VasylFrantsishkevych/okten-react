import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAll: (id, page) => axiosService.get(`${urls.movies}?&language=en-US&with_genres=${id}`, {params: {page}})
        .then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movieId}/${id}`).then(value => value.data)
}