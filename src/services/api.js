import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => Promise.resolve(res.body);

const handlerErr = err => Promise.reject(err);

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
    request.get(`/articles?limit=10`)
};

const Auth = {
  login: (email, password) =>
    request.post('/users/login', { user: { email, password } }),
  current: () =>
    request.get('/user'),
  register: (username, email, password) =>
    request.post('/users', { user: { username, email, password } })
};

//console.log('token is ', token)

export default {
  Articles,
  Auth,
  setToken
};


