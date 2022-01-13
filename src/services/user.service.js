import {urls} from "../configs/Urls";

const getUsers = () => {
    return fetch(urls.users)
        .then(response => response.json())
}

const getUser = (id) => {
  return fetch(`${urls.users}/${id}`)
      .then(response => response.json())
}

export const userServices = {
    getUsers, getUser
}