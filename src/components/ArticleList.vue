<template>
  <!--<div>-->
    <!--<div v-if="!articles" class="article-preview">Loading...</div>-->
    <!--<div v-if="articles.length === 0" class="article-preview">No articles are here...yet.</div>-->
    <!--<div>-->
      <!--<article-preview v-for="(article, index) in articles" :article="article" :key="index"></article-preview>-->

      <!--<list-pagination></list-pagination>-->
    <!--</div>-->
  <!--</div>-->
  <div>
    <article-preview v-for="(article, index) in articles" :article="article" :key="index"></article-preview>
    <div v-if="!articles.length" class="article-preview">No articles are here...yet.</div>

    <list-pagination
      :articlesCount="articlesCount"
      :currentPage="currentPage" @onSetPage="onSetPage">
    </list-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ArticlePreview from './ArticlePreview'
import ListPagination from './ListPagination'
export default {
  props: ['articles', 'articlesCount', 'currentPage'],
  components: {
    ArticlePreview: ArticlePreview,
    ListPagination: ListPagination
  },
  methods: {
    onSetPage(p) {
      this.$emit('onSetPage', p)
    }
  }
}
</script>
