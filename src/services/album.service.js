import {axiosService} from "./axios.servise";
import {urls} from "../configs/urls";

export const albumService = {
    getPhotoAlbumId:(albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}