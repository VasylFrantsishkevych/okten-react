import {axiosServiceJson} from "./axios.service";
import {urlsJson} from "../configs";

export const userService = {
    getAll:() => axiosServiceJson.get(urlsJson.users).then(value => value.data)
}