import {axiosServiceJson} from "./axios.service";

import {urlsJson} from "../configs";

export const postService = {
    getAll:() => axiosServiceJson.get(urlsJson.posts).then(value => value.data)
}