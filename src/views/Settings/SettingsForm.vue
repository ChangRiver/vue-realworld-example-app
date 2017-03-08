<template>
  <form @submit.prevent="submitForm()">
    <fieldset>

      <fieldset class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="URL of profile picture"
          v-model="userInfo.image">
      </fieldset>

      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="Username"
          v-model="userInfo.username">
      </fieldset>

      <fieldset class="form-group">
        <textarea
          rows="8"
          class="form-control form-control-lg"
          placeholder="Short bio about you"
          v-model="userInfo.bio">

        </textarea>
      </fieldset>

      <fieldset class="form-group">
        <input
          type="email"
          class="form-control form-control-lg"
          placeholder="Email"
          v-model="userInfo.email">
      </fieldset>

      <fieldset class="form-group">
        <input
          type="password"
          class="form-control form-control-lg"
          placeholder="New Password"
          v-model="userInfo.password">
      </fieldset>

      <button
        class="btn btn-lg btn-primary pull-xs-right"
        type="submit"
        :disabled="inProgress">
        Update Settings
      </button>

    </fieldset>
  </form>
</template>

<script>
  import UPDATE_FIELD from '../../store/mutation-types';
  export default {
    data() {
      return {
        userInfo: {
          image: '',
          username: '',
          bio: '',
          email: '',
          password: ''
        }
      }
    },
    props: ['currentUser', 'inProgress'],
    methods: {
      submitForm() {
        const user = Object.assign({}, this.userInfo);
        if(!user.password) {
          delete user.password
        }
        console.log('user data to post ', user);
        this.$emit('submitForm', user)
      }
    },
    beforeMount() {
      if(this.currentUser) {
        Object.assign(this.userInfo, {
          image: this.currentUser.image || '',
          username: this.currentUser.username,
          bio: this.currentUser.bio,
          email: this.currentUser.email
        })
      }
    }
  }
</script>
