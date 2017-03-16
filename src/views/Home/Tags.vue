<template>
  <div v-if="loading">
    Loading Tags...
  </div>
  <div v-else class="tag-list clearfix">
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
    data() {
      return {
        loading: true
      }
    },
    created() {
      this.loading = false;
    },
    props: ['tags'],
    methods: mapActions(['onClickTag'])
  }
</script>
<style>
  .tag-list a { float: left }
</style>
