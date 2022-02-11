import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const genreService = {
    getAll: () => axiosService.get(urls.genres).then(value => value.data),
    getGenreId: (id, page) => axiosService.get(`${urls.movies}?&language=en-US&with_genres=${id}`, {params: {page}})
        .then(value => value.data)
}
