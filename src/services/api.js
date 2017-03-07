import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => Promise.resolve(res.body);

const handlerErr = err => Promise.reject(err);

let token = null;

if(token) {
  Vue.http.headers.common['Authorization'] = `Token ${token}`;
}

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


export default {
  Articles
};
