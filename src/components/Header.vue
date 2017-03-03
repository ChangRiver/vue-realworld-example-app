<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"></router-link>

      <ul class="nav navbar-nav pull-xs-right">

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
  export default {

  }
</script>
