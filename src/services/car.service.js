import {axiosService} from "./axios.service";
import {urls} from "../configs";
import {carryValue} from "@testing-library/user-event/dist/keyboard/shared";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
    update: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}