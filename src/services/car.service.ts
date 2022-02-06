import {axiosService} from "./axios.service";

import {ICar} from "../interfaces";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars),
    creat: (car:ICar) => axiosService.post<ICar>(urls.cars, car)
}