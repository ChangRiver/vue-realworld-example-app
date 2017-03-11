<template>
  <router-link
    v-if="isUser"
    to="/settings"
    class="btn btn-sm btn-outline-secondary action-btn">
    <i class="ion-gear-a"></i> Edit Profile Settings
  </router-link>
</template>
<script>
  export default {
    props: ['isUser']
  }
</script>
