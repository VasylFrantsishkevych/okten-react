import {url} from "../configs/Url";

const getUsers = () => {
  return fetch(url.users)
      .then(res => res.json())
}
export const userServices = {
  getUsers
}