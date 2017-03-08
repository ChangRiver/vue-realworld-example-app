<template>
  <div>
    <article-preview v-for="(article, index) in articles" :article="article" :key="index"></article-preview>
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview'
export default {
  data() {
    return {

    }
  },
  props: ['articles'],
  components: {
    ArticlePreview: ArticlePreview
  }
}
</script>
