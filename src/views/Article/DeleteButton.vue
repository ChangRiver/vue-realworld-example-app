<template>
  <span v-if="show" class="mod-options">
    <i class="ion-trash-a"></i>
  </span>
</template>
<script>
  export default {
    props: ['show']
  }
</script>
