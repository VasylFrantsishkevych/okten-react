import axios from "axios";

import baseUrlCars from "../configs/cars/urls";
import baseUrlJson from "../configs/json/urlsJson";

export const axiosService = axios.create({baseURL: baseUrlCars});

export const axiosServiceJson = axios.create({baseURL: baseUrlJson});
