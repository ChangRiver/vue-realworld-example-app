<template>
  <div>
    <div v-if="!articles.length" class="article-preview">Loading...</div>
    <!--<div v-cloak v-if="!articles.length" class="article-preview">No articles are here...yet.</div>-->
    <article-preview v-cloak v-for="(article, index) in articles" :article="article" :key="index"></article-preview>

    <list-pagination
      :articlesCount="articlesCount"
      :currentPage="currentPage" @onSetPage="onSetPage">
    </list-pagination>
  </div>
</template>

<script>
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
