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

          <list-errors :errors="errors"></list-errors>

          <form @submit.prevent="submitForm(username, email, password)">
            <fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control form-control-lg"
                  v-model="username" />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control form-control-lg"
                  v-model="email" />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control form-control-lg"
                  v-model="password" />
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
  import ListErrors from '../components/ListErrors'
  import api from '../services/api'
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        inProgress: false,
        errors: null
      }
    },
    components: {
      ListErrors: ListErrors
    },
    methods: {
      submitForm(username, email, password) {
        this.inProgress = true;
        api.Auth.register(username, email, password)
          .then(res => {
          let currentUser, token;

          currentUser = res.user;
          token = res.user.token;

        if(token) {
          window.localStorage.setItem('jwt', token)
          api.setToken(token)
        }

        this.$store.commit('REGISTER', { currentUser, token })
        this.$router.push('/')
        this.inProgress = false;
          //console.log('register ', res)
        }, err => {
          this.inProgress = false;
          this.errors = err.body;
        })
      }
    }
  }
</script>
