import {axiosServiceJson} from "./axios.service";

import {urlsJson} from "../configs";

export const commentService = {
    getAll: () => axiosServiceJson.get(urlsJson.comments).then(value => value.data)
}