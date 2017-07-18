<template>
  <paginate
    :page-count="pageCount"
    :margin-pages="2"
    :page-range="5"
    :click-handler="onClick"
    :initial-page="0"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link-item'"
    :prev-class="'prev-item'"
    :prev-link-class="'prev-link-item'"
    :next-class="'next-item'"
    :next-link-class="'next-link-item'"
  >
  </paginate>
</template>
<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  export default {
    props: ['articlesCount', 'currentPage'],
    computed: {
      ...mapGetters(['pageCount'])
    },
    methods: {
      onClick(pageNum) {
        this.$emit('onSetPage', pageNum);
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
