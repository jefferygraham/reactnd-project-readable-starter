const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const getHelp = () =>
  fetch(`${api}`, { headers })
    .then((res) => res.text())
    .then((data) => data);

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getCategoryPosts = () =>
  fetch(`${api}/react/posts`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getPost = () =>
  fetch(`${api}/posts/8xf0y6ziyjabvozdd253nd`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getPostComments = () =>
  fetch(`${api}/posts/8xf0y6ziyjabvozdd253nd/comments`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getComment = () =>
  fetch(`${api}/comments/894tuq4ut84ut8v4t8wun89g`, { headers })
    .then((res) => res.json())
    .then((data) => data);
