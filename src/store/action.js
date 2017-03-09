import api from '../services/api'

import {
  HOME_PAGE_LOADED,
  APP_LOAD,
  ARTICLE_DETAIL_LOADED,
  ARTICLE_COMMENT_LOADED,
  DELETE_ARTICLE,
  DELETE_COMMENT,
  ADD_COMMENT
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
  }
}

