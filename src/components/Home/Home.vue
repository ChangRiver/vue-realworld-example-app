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
import api from '../../services/api';

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

  }
}
</script>

<style>
  .nav-link {
    cursor:pointer;
  }
</style>
