import axios from "axios";

import baseURL from "../configs/Urls";

const axiosServices = axios.create({
    baseURL
});

export default axiosServices;