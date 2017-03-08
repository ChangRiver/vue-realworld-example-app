
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  appName: 'conduit',
  articles: null,
  currentUser: null,
  token: null
};


export default  new Vuex.Store({
  state,
  actions,
  mutations
})
