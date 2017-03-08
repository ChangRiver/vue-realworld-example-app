import api from '../services/api'

import {
  HOME_PAGE_LOADED,
  APP_LOAD
} from './mutation-types'

export default {
  getArticles({
    commit
  }) {
    api.Articles.all().then(res => {
      commit(HOME_PAGE_LOADED, res.articles)
      //console.log('data ', res.articles)
    });
  },
  onLoad({
    commit
  }) {
    api.Auth.current().then(res => {
      let currentUser = res.user;
      let token = res.user.token;
      commit(APP_LOAD, { currentUser, token })
    })
  }
}
