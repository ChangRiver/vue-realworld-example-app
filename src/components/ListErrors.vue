<template>
  <ul v-if="errors" class="error-messages">
    <li v-for="(val, key) in errors" :key="key">
      {{key}} {{val}}
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['errors']
  }
</script>
