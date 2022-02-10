import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAll: (page) => axiosService.get(urls.movies, {params: {page}}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movieId}/${id}`).then(value => value.data)
}