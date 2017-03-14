<template>
  <div v-if="tags" class="tag-list">
    <a v-for="tag in tags" :key="tag"
      @click.prevent="onClickTag(tag)"
      href=""
      class="tag-default tag-pill">
      {{ tag }}
    </a>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    props: ['tags'],
    methods: mapActions(['onClickTag'])
  }
</script>
<style>
  .tag-list a { float: left }
</style>
