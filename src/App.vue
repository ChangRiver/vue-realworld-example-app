<template>
  <div id="app">
    <layout-header :appName="appName" :currentUser="currentUser"></layout-header>
    <router-view v-if="appLoaded"></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
  import api from './services/api';
import Header from './components/Header';
import Footer from './components/Footer';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'app',
  components: {
    layoutHeader: Header,
    layoutFooter: Footer
  },
  async mounted() {
    const token = window.localStorage.getItem('jwt');

    if(token) {
      api.setToken(token);
      api.Auth.current().then(res => {
        this.APP_LOAD({token, ...res});
      })
    } else {
      this.APP_LOAD({token})
    }

  },
  computed: {
    ...mapState(['appName', 'currentUser', 'appLoaded'])
  },
  methods: {
  ...mapMutations(['APP_LOAD'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
