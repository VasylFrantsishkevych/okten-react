// import {AxiosResponse} from "axios";

import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const userService = {
    //перший спосіб як типізувати
    // getAll: ():Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users)
    getAll:() => axiosService.get<IUser[]>(urls.users)
 }