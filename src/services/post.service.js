import {urls} from "../configs/Urls";

const getPost = (id) => {
  return fetch(`${urls.users}/${id}/posts`)
      .then(response => response.json())
}
export const postsServices = {
    getPost
}