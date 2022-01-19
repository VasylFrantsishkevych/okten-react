import {axiosService} from "./axios.servise";
import {urls} from "../configs/urls";

export const albumService = {
    getPhotoAlbumId:(id) => axiosService.get(`${urls.albums}/${id}/${urls.photos}`).then(value => value.data)
}