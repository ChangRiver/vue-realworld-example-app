<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link to="/login">
              Have an account?
            </router-link>
          </p>

          <form>
            <fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control form-control-lg"
                  v-model="account.username" />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control form-control-lg"
                  v-model="account.email" />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control form-control-lg"
                  v-model="account.password" />
              </fieldset>

              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="submit">
                Sign Up
              </button>

            </fieldset>
          </form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        account: {
          username: '',
          email: '',
          password: ''
        }
      }
    }
  }
</script>
