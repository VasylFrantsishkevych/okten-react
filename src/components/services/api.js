const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
}

const getUser = (id) => {
  return fetch('https://jsonplaceholder.typicode.com/users' + id)
      .then(response => response.json())
}

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
}

const getPost = (id) => {
  return fetch('https://jsonplaceholder.typicode.com/posts'+id)
      .then(response => response.json())
}

const getComponents = () => {
  return  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
}

const getComponent = (id) => {
  return  fetch('https://jsonplaceholder.typicode.com/comments' + id)
      .then(response => response.json())
}


export {getUsers, getUser, getPosts, getPost, getComponents, getComponent}