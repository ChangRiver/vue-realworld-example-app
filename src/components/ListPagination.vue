<template>
  <nav v-if="articlesCount > 10">
    <ul class="pagination">
      <li v-for="v in pageRange" :key="v"
          class="page-item"
          @click.prevent="setPage(v)">
        <a href="" class="page-link" :class="{'active': currentPage === v + 1 }">{{ v + 1 }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    props: ['articlesCount', 'currentPage'],
    computed: {
      ...mapGetters(['pageRange'])
    },
    methods: {
      setPage(p) {
        const page = p + 1;
        this.$emit('onSetPage', page)
      }
    }
  }
</script>
<style>
  .page-item .active {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #5CB85C;
    border-color: #5CB85C;
  }
</style>
