import api from '../services/api'

import {
  HOME_PAGE_LOADED
} from './mutation-types'

export default {
  getArticles({
    commit
  }) {
    api.Articles.all().then(res => {
      commit(HOME_PAGE_LOADED, res.articles)
      console.log('data ', res.articles)
    });
  }
}
