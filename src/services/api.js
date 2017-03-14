import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => Promise.resolve(res.body);

const handlerErr = err => Promise.reject(err);

const encode = encodeURIComponent;

let token = window.localStorage.getItem('jwt');

if(token) {
  Vue.http.headers.common['Authorization'] = `Token ${token}`;
}

const setToken = _token => { token = _token; }

const request = {
  get: url =>
    Vue.http.get(`${API_ROOT}${url}`).then(responseBody, handlerErr),
  post: (url, body) =>
    Vue.http.post(`${API_ROOT}${url}`, body).then(responseBody, handlerErr),
  put: (url, body) =>
    Vue.http.put(`${API_ROOT}${url}`, body).then(responseBody, handlerErr),
  del: url =>
    Vue.http.delete(`${API_ROOT}${url}`).then(responseBody, handlerErr)
};

const Articles = {
  all: page =>
    request.get(`/articles?limit=10`),
  get: slug =>
    request.get(`/articles/${slug}`),
  del: slug =>
    request.del(`/articles/${slug}`),
  byAuthor: (author, page) =>
    request.get(`/articles?author=${encode(author)}&limit=5`),
  byTag: (tag, page) =>
    request.get(`/articles?tag=${encode(tag)}&limit=10`),
  favoritedBy: (author, page) =>
    request.get(`/articles?favorited=${encode(author)}&limit=5`),
  feed: () =>
    request.get('/articles/feed?limit=10')
};

const Auth = {
  login: (email, password) =>
    request.post('/users/login', { user: { email, password } }),
  current: () =>
    request.get('/user'),
  register: (username, email, password) =>
    request.post('/users', { user: { username, email, password } }),
  save: user =>
    request.put('/user', { user })
};

const Comments = {
  forArticle: slug =>
    request.get(`/articles/${slug}/comments`),
  create: (slug, comment) =>
    request.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    request.del(`/articles/${slug}/comments/${commentId}`)
};

const Profile = {
  follow: username =>
    request.post(`/profiles/${username}/follow`),
  get: username =>
    request.get(`/profiles/${username}`),
  unfollow: username =>
    request.del(`/profiles/${username}/follow`)
};

const Tags = {
  getAll: () => request.get('/tags')
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken
};


