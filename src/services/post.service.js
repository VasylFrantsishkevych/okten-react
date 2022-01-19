import {axiosService} from "./axios.servise";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getById:(id)=> axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getByPostId:(id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
 }