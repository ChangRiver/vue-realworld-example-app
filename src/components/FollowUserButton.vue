<template>
  <button
    v-if="!isUser"
    @click.prevent="handleClick()"
    :class="{ 'btn-secondary': user.following, 'btn-outline-secondary': !user.following }"
    class="btn btn-sm action-btn"
    >
    <i class="ion-plus-round"></i>
    &nbsp;
    {{ user.following ? 'Unfollow' : 'Follow' }} {{ user.username }}
  </button>
</template>
<script>
  export default {
    props: ['user', 'isUser'],
    methods: {
      handleClick() {
        if(this.user.following) {
          this.$emit('onUnFollow', this.user.username)
        } else {
          this.$emit('onFollow', this.user.username)
        }
      }
    }
  }
</script>
<style>

</style>
