import {urls} from "../configs/Urls";

const getPosts = () => {
  return fetch(urls.posts)
      .then(response => response.json())
}
const getPost = (id) => {
  return fetch(`${urls.posts}/${id}`)
      .then(response => response.json())
}
export const postsServices = {
    getPosts,
    getPost
}