<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <routerLink class="navbar-brand" to="/"></routerLink>

      <ul class="nav navbar-nav pull-xs-right">

        <li class="nav-item">
          <routerLink class="nav-link" to="/">
            Home
          </routerLink>
        </li>

        <li class="nav-item">
          <a class="nav-link">
            Sign in
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link">
            Sign up
          </a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>
