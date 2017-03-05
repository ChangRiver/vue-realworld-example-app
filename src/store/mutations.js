import {
  HOME_PAGE_LOADED
} from './mutation-types'

export default  {
  [HOME_PAGE_LOADED](state, articles) {
    state.articles = articles
  }
}
