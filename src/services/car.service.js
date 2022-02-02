import {axiosService} from "./axios.service";

import {urlsCarApi} from "../configs";


export const carService = {
    getAll: () => axiosService.get(urlsCarApi.cars).then(value => value.data),
    create: (car) => axiosService.post(urlsCarApi.cars, car).then(value => value.data),
    delete: (id) => axiosService.delete(`${urlsCarApi.cars}/${id}`),
    update: (id, car) => axiosService.patch(`${urlsCarApi.cars}/${id}`, car).then(value => value.data)
}