<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">

          <h1 class="text-xs-center">Your Settings</h1>

          <list-errors :errors="errors"></list-errors>

          <settings-form :currentUser="currentUser" :inProgress="inProgress" @submitForm="onSubmitForm"></settings-form>

          <hr>

          <button class="btn btn-outline-danger" @click="logout()">
            Or click here to logout
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import api from '../../services/api';
  import { mapState } from 'vuex';
  import ListErrors from '../../components/ListErrors';
  import SettingsForm from './SettingsForm';
  import { SETTINGS_SAVED, LOGOUT } from '../../store/mutation-types';
  export default {
    data() {
      return {
        errors: null,
        inProgress: false
      }
    },
    computed: mapState(['currentUser']),
    components: {
      ListErrors: ListErrors,
      SettingsForm: SettingsForm
    },
    methods: {
      onSubmitForm(user) {
        this.inProgress = true;
        api.Auth.save(user)
          .then(res => {
          this.$store.commit('SETTINGS_SAVED', res)
          this.inProgress = false;
        }, err => {
          this.inProgress = false;
          this.errors = err.body;
        })
      },
      logout() {
        window.localStorage.setItem('jwt', '');
        api.setToken(null);

        this.$store.commit('LOGOUT');
        this.$router.push('/')
      }
    }
  }
</script>
