<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">{{ appName }}</router-link>

      <ul v-if="currentUser" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="'@' + currentUser.username">
            <img :src="currentUser.image" alt="" class="user-pic">
            {{ currentUser.username }}
          </router-link>
        </li>

      </ul>

      <ul v-else class="nav navbar-nav pull-xs-right">

        <li class="nav-item">
          <router-link class="nav-link" to="/">
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/login">
            Sign in
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/register">
            Sign up
          </router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: ['appName', 'currentUser']
  }
</script>
