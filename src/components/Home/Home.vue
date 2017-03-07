<template>
  <div class="home-page">

   <banner></banner>

    <div class="container page">
      <div class="row">

        <main-view :articles="articles"></main-view>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import Banner from './Banner';
import MainView from './MainView';
import { mapState, mapActions } from 'vuex'
import api from '../../services/api'

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    Banner: Banner,
    MainView: MainView
  },
  beforeMount() {
    this.getArticles()
    //console.log('res data', res);
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  }
}
</script>

<style>
  .nav-link {
    cursor:pointer;
  }
</style>
