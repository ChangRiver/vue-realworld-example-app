<template>
  <article-list :articles="articles" :articlesCount="articlesCount"></article-list>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import ArticleList from '../../components/ArticleList'
  export default {
    mounted() {
      let username = this.$route.params.username;
      this.getFavoritesProfile({ username });
    },
    components: {
      ArticleList: ArticleList
    },
    computed: mapState([ 'articles', 'articlesCount' ]),
    methods: {
      ...mapActions([
        'getFavoritesProfile'
      ]),
    }
  }
</script>

