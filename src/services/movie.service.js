import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movieId}/${id}`).then(value => value.data)
}