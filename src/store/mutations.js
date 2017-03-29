import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  LOGIN,
  REGISTER,
  APP_LOAD,
  LOGOUT,
  SETTINGS_SAVED,
  ARTICLE_DETAIL_LOADED,
  ARTICLE_COMMENT_LOADED,
  ARTICLE_PAGE_UNLOADED,
  DELETE_COMMENT,
  ADD_COMMENT,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  CHANGE_TAB,
  APPLY_TAG_FILTER,
  SET_PAGE,
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED
} from './mutation-types'

export default  {
  [HOME_PAGE_LOADED](state, payload) {
    state.articles = payload.articles;
    state.tags = payload.tags;
    state.tab = payload.tab;
    state.articlesCount = payload.articlesCount;
  },
  [HOME_PAGE_UNLOADED](state) {
    state.articles = [];
    state.tag = null;
    state.articlesCount = null;
  },
  [LOGIN] (state, { currentUser, token }) {
    state.currentUser = currentUser;
    state.token = token;
  },
  [REGISTER] (state, { currentUser, token }) {
    state.currentUser = currentUser;
    state.token = token;
  },
  [APP_LOAD](state, payload) {
    state.currentUser = payload.user;
    state.token = payload.user.token;
    state.appLoaded = true;
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
  },
  [PROFILE_PAGE_LOADED] (state, { articles, profile }) {
    state.articles = articles.articles
    state.articlesCount = articles.articlesCount
    state.profile = profile.profile
  },
  [PROFILE_PAGE_UNLOADED] (state) {
    state.articles = [];
    state.articlesCount = null;
  },
  [FOLLOW_USER] (state, { profile }) {
    state.profile = profile
  },
  [UNFOLLOW_USER] (state, { profile }) {
    state.profile = profile
  },
  [PROFILE_FAVORITES_PAGE_LOADED] (state, { articles, profile }) {
    state.articles = articles.articles
    state.articlesCount = articles.articlesCount
    state.profile = profile.profile
  },
  [PROFILE_FAVORITES_PAGE_UNLOADED] (state) {
    state.articles = [];
    state.articlesCount = null;
  },
  [CHANGE_TAB] (state, { feedType, articles, articlesCount }) {
    state.tab = feedType;
    state.tag = null;
    state.articles = articles;
    state.articlesCount = articlesCount;
  },
  [APPLY_TAG_FILTER] (state, payload) {
    state.articles = payload.articles;
    state.articlesCount = payload.articlesCount;
    state.tab = null;
    state.tag = payload.tag;
  },
  [SET_PAGE] (state, payload) {
    state.articles = payload.articles;
    state.articlesCount = payload.articlesCount;
    state.currentPage = payload.currentPage
  },
  [ARTICLE_FAVORITED] (state, payload) {
    state.articles = state.articles.map(article => {
      if(article.slug === payload.article.slug) {
        return {
          ...article,
          favoritesCount: payload.article.favoritesCount,
          favorited: payload.article.favorited
        }
      }
      return article;
    })
  },
  [ARTICLE_UNFAVORITED] (state, payload) {
    state.articles = state.articles.filter(article => {
      if(article.slug === payload.article.slug) {
        return {
          ...article,
          favoritesCount: payload.article.favoritesCount,
          favorited: payload.article.favorited
        }
      }
      return article;
    })
  }
}
