<template>
  <div v-if="profile" class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">

            <img :src="profile.image" alt="" class="user-img">
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>

            <!--<EditProfileSettings>-->
            <edit-profile-settings :isUser="isUser"></edit-profile-settings>
            <!--<FollowUserButton> -->
            <follow-user-button
              :isUser="isUser"
              :user="profile"
              @onFollow="Follow"
              @onUnFollow="UnFollow">

            </follow-user-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">

          <div class="articles-toggle">

            <!-- add the article toggle -->
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  :to="'/@' + profile.username"
                  class="nav-link active">
                  My Articles
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="'/@' + profile.username + '/favorites'"
                  class="nav-link">
                  Favorited Articles
                </router-link>
              </li>
            </ul>

          </div>

          <!--<router-view></router-view>-->
          <article-list :articles="articles" :articlesCount="articlesCount"></article-list>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import ArticleList from '../../components/ArticleList'
  import FollowUserButton from '../../components/FollowUserButton'
  import EditProfileSettings from '../../components/EditProfileSettings'
  export default {
    components: {
      FollowUserButton: FollowUserButton,
      EditProfileSettings: EditProfileSettings,
      ArticleList: ArticleList
    },
    computed: {
      ...mapGetters(['isUser']),
    ...mapState([
      'profile',
      'articles',
      'articlesCount'
    ])
  },
  mounted()
  {
    let username = this.$route.params.username;
    this.getProfile({username});
  },
  beforeDestroy() {
    this.clearProfile();
  },
  methods: {
  ...
    mapActions([
      'getProfile',
      'clearProfile'
    ]),
      Follow(username)
    {
      this.$store.dispatch('onFollow', {username})
    }
  ,
    UnFollow(username)
    {
      this.$store.dispatch('onUnFollow', {username})
    }
  }
  }
</script>

