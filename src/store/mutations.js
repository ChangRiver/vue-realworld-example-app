import {
  HOME_PAGE_LOADED,
  LOGIN,
  REGISTER,
  APP_LOAD
} from './mutation-types'

export default  {
  [HOME_PAGE_LOADED](state, articles) {
    state.articles = articles
  },
  [LOGIN] (state, { currentUser, token }) {
    state.currentUser = currentUser;
    state.token = token;
  },  
  [REGISTER] (state, { currentUser, token }) {
    state.currentUser = currentUser;
    state.token = token;
  },
  [APP_LOAD](state, { currentUser, token }) {
    state.currentUser = currentUser;
    state.token = token;
  }
}
