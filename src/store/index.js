
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import * as getters from './getters'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  appName: 'conduit',
  appLoaded: false,
  articles: [],
  tags: null,
  tag: null,
  articlesCount: null,
  currentUser: null,
  token: null,
  article: null,
  comments: [],
  profile: {},
  tab: null,
  currentPage: 1
};


export default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
