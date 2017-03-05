import api from '../services/api'

import {
  HOME_PAGE_LOADED
} from './mutation-types'

export default {
  async getArticles({
    commit,
    state
  }) {
    let res = await api.Articles.all()
    commit(HOME_PAGE_LOADED, res)
  }
}
