import api from '../services/api'

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APP_LOAD,
  ARTICLE_DETAIL_LOADED,
  ARTICLE_COMMENT_LOADED,
  DELETE_ARTICLE,
  DELETE_COMMENT,
  ADD_COMMENT,
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  SET_PAGE
} from './mutation-types'

export default {
async  onHomePageLoad({
    commit, state
  }, tab) {
    let articles;
    const articlesPromise = state.token ?
      api.Articles.feed() :
      api.Articles.all();

    await articlesPromise.then(res => {
      console.log('onHomePageLoad articles', res);
      articles = res;
    });
    const tags = await api.Tags.getAll();

    commit(HOME_PAGE_LOADED,  { tab, ...tags, ...articles });
  },
  onHomePageUnload({
    commit
  }) {
    commit(HOME_PAGE_UNLOADED)
  },
  onLoad({
    commit
  }) {
    api.Auth.current().then(res => {
      let currentUser = res.user;
      let token = res.user.token;
      commit(APP_LOAD, { currentUser, token })
    })
  },
  getArticleDetail({
    commit
  }, params) {
    api.Articles.get(params)
      .then(article => {
        commit(ARTICLE_DETAIL_LOADED, article)
      }, err => console.error(err))
  },
  getComments({
    commit
  }, params) {
    api.Comments.forArticle(params)
      .then(comments => {
        commit( ARTICLE_COMMENT_LOADED, comments)
      })
  },
  delArticle({
    commit
  }, slug) {
    api.Articles.del(slug)
      .then(res => {
        console.log('del succ', res)
        // commit(DELETE_ARTICLE)
      })
  },
  delComment({
    commit
  }, {
    slug,
    commentId
  }) {
    api.Comments.delete(slug, commentId)
      .then(res => {
        console.log('del comment ', res);
        commit(DELETE_COMMENT, { res, commentId })
      })
  },
  createComment({
    commit
  },
    {
      slug,
      body
    }) {
    api.Comments.create(slug, { body: body })
      .then(res => {
        commit(ADD_COMMENT, res)
      })
  },
  onFollow({
    commit
  }, { username }) {
    api.Profile.follow(username)
      .then(profile => {
        commit(FOLLOW_USER, profile)
      })
  },
  onUnFollow({
    commit
  }, { username }) {
    api.Profile.unfollow(username)
      .then(profile => {
        commit(UNFOLLOW_USER, profile)
      })
  },
  async getProfile({
    commit
  }, { username }) {
    let profile = await api.Profile.get(username)
    let articles = await  api.Articles.byAuthor(username)
    // console.log('data to submit  ', profile, articles)
    commit(PROFILE_PAGE_LOADED, { profile, articles })
  },
  clearProfile({
    commit
  }) {
    commit(PROFILE_PAGE_UNLOADED)
  },
  async getFavoritesProfile({
    commit
  }, { username }) {
    let profile = await api.Profile.get(username)
    let articles = await api.Articles.favoritedBy(username)
    commit(PROFILE_FAVORITES_PAGE_LOADED, { profile, articles })
  },
  clearFavoritesProfile({
    commit
  }) {
    commit(PROFILE_FAVORITES_PAGE_UNLOADED)
  },
  async onClickTag({
    commit
  }, tag) {
    let articles = await api.Articles.byTag(tag);
    // console.log('apply by tag ', articles);
    commit(APPLY_TAG_FILTER, { ...articles, tag })
  }
  // async onSetPage({
  //   commit, state
  // }, tab, p) {
  //   let payload = state.tab === 'feed' ? api.Articles.feed(p) : api.Articles.all(p)
  //   // commit(SET_PAGE, payload)
  // }
}

