
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  appName: 'conduit',
  articles: null,
  currentUser: null,
  token: null,
  article: null,
  comments: []
};


export default  new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
