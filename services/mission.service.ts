import axios, {AxiosResponse} from "axios";

import {IMission} from "../interfaces/mission.interface";

export const missionService = {
    getAll: ():Promise<AxiosResponse<IMission[]>> => axios.get('https://api.spacexdata.com/v3/launches')
}