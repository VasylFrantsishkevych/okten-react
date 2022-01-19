import {axiosService} from "./axios.servise";
import {urls} from "../configs/urls";

export const userService = {
    getAll:() => axiosService.get(urls.users).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserId:(id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAlbumsUserId:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}