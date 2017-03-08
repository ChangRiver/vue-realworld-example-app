<template>
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign In</h1>
        <p class="text-xs-center">
          <router-link to="/register">
            Need an account?
          </router-link>
        </p>

        <list-errors :errors="errors"></list-errors>

        <form @submit.prevent="submitForm(email, password)">
          <fieldset>

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
              :disabled="inProgress"
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit">
              Sign in
            </button>

          </fieldset>
        </form>

      </div>

    </div>
  </div>
</div>
</template>

<script>
  import api from '../services/api'
  import ListErrors from '../components/ListErrors'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        email: '',
        password: '',
        inProgress: false,
        errors: null
      }
    },
    methods: {
      submitForm(email, password) {
        this.inProgress = true;
        api.Auth.login(email, password)
          .then(res => {
          let currentUser, token;

          currentUser = res.user;
          token = res.user.token;

          if(token) {
            window.localStorage.setItem('jwt', token)
            api.setToken(token)
          }

          this.inProgress = false;
          //console.log('login success ', currentUser)
          this.$store.commit('LOGIN', { currentUser, token })
          this.$router.push('/')
        }, err => {
          this.inProgress = false;
          this.errors = err.body
        })

      }
    },
    components: {
      ListErrors: ListErrors
    }
  }
</script>
