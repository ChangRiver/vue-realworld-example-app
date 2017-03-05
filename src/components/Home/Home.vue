<template>
  <div class="home-page">

   <banner></banner>

    <div class="container page">
      <div class="row">

        <main-view></main-view>

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
import { mapActions } from 'vuex'

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
   let  res = this.getArticles()
   console.log('res ', res)
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
