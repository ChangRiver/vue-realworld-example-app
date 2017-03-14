<template>
  <div class="home-page">

   <banner></banner>

    <div class="container page">
      <div class="row">

        <main-view></main-view>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <tags :tags="tags"></tags>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import { mapState, mapActions } from 'vuex'
import api from '../../services/api'

export default {
  name: 'home',
  computed: mapState(['token', 'tags']),
  components: {
    Banner: Banner,
    MainView: MainView,
    Tags: Tags
  },
  mounted() {
    const tab = this.token ? 'feed' : 'all';
    this.onHomePageLoad(tab)
  },
  beforeDestroy() {
    this.onHomePageUnload()
  },
  methods: {
    ...mapActions([
      'onHomePageLoad',
      'onHomePageUnload'
    ])
  }
}
</script>

<style>
  .nav-link {
    cursor:pointer;
  }

  .home-page .banner {
    background: #316B86
  }
</style>
