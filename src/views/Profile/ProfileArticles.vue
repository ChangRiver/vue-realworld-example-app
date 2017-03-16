<template>
  <article-list :articles="articles" :articlesCount="articlesCount"></article-list>
</template>
<script>
  import ArticleList from '../../components/ArticleList'
  import { mapState, mapActions } from 'vuex';
  export default {
    mounted() {
      let username = this.$route.params.username;
      this.getProfile({ username });
    },
    components: {
      ArticleList: ArticleList
    },
    computed: mapState([ 'articles', 'articlesCount' ]),
    methods: {
      ...mapActions([
        'getProfile'
      ])
    }
  }
</script>
