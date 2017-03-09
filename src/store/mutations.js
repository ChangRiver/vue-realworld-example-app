import {
  HOME_PAGE_LOADED,
  LOGIN,
  REGISTER,
  APP_LOAD,
  LOGOUT,
  SETTINGS_SAVED,
  ARTICLE_DETAIL_LOADED,
  ARTICLE_COMMENT_LOADED,
  ARTICLE_PAGE_UNLOADED,
  DELETE_ARTICLE,
  DELETE_COMMENT,
  ADD_COMMENT
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
  },
  [LOGOUT](state) {
    state.currentUser = null;
    state.token = null;
  },
  [SETTINGS_SAVED](state, { user }) {
    state.currentUser = user;
  },
  [ARTICLE_DETAIL_LOADED](state, { article }) {
    state.article = article;
  },
  [ARTICLE_COMMENT_LOADED](state, { comments }) {
    state.comments = comments;
  },
  [ARTICLE_PAGE_UNLOADED](state) {
    state.article = null;
    state.comments = null;
  },
  [DELETE_COMMENT](state, { comment, commentId }) {
    state.commnets = state.comments.filter(comment => comment.id !== commentId)
  },
  [ADD_COMMENT](state, { comment }) {
    state.comments = state.comments.concat([comment])
  }
}
