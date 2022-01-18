import axiosServices from "./axios.service";
import {urls} from "../configs/Urls";

export const carService = {
    create:(car) => axiosServices.post(urls.cars, car).then(value => value.data),
    getAll:() => axiosServices.get(urls.cars).then(value => value.data),
    getById:(id) => axiosServices.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById:(id, car) => axiosServices.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deleteById:(id) => axiosServices.delete(`${urls.cars}/${id}`)
}