import Vue from 'vue';
import store from '../store';
import { LOGOUT } from '../store/mutation-types';
import axios from 'axios';
import router from '../router';

Vue.prototype.$http = axios;

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => Promise.resolve(res.data);

const handlerErr = err => Promise.reject(err);

const encode = encodeURIComponent;

let token = window.localStorage.getItem('jwt');

// axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://conduit.productionready.io/api';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if(token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if(error.response) {
      switch(error.response.status) {
        case 401:
          store.commit(LOGOUT);
          router.replace({path: 'login'})
      }
    }
    return Promise.reject(error);
  }
);

const setToken = _token => { token = _token; };

const parse = data => {
  try {
    JSON.stringify(data);
  } catch(error) {
    return false
  }
}

const request = {
  get: url =>
    axios.get(`${API_ROOT}${url}`).then(responseBody, handlerErr),
  post: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body).then(responseBody, handlerErr),
  put: (url, body) =>
    axios.put(`${API_ROOT}${url}`, body).then(responseBody, handlerErr),
  del: url =>
   axios.delete(`${API_ROOT}${url}`).then(responseBody, handlerErr)
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count:0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined });
const Articles = {
  all: page =>
    request.get(`/articles?${limit(10, page)}`),
  get: slug =>
    request.get(`/articles/${slug}`),
  del: slug =>
    request.del(`/articles/${slug}`),
  byAuthor: (author, page) =>
    request.get(`/articles?author=${encode(author)}&${limit(10, page)}`),
  byTag: (tag, page) =>
    request.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  favoritedBy: (author, page) =>
    request.get(`/articles?favorited=${encode(author)}&${limit(10, page)}`),
  feed: () =>
    request.get('/articles/feed?limit=10&offset=0'),
  update: article =>
    request.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    request.post('/articles', { article }),
  favorite: slug =>
    request.post(`/articles/${slug}/favorite`),
  unfavorite: slug =>
    request.del(`/articles/${slug}/favorite`)
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


