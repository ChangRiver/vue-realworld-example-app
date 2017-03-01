<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" to="/">conduit</router-link>
      <span class="attribution">
        &copy; {{ today | data: 'yyyy }}.
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
        Code licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        taday: Date.now()
      }
    }
  }
</script>
