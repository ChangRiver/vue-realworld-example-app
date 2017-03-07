<template>
  <div>
    <article-preview v-for="article in articles" :article="article"></article-preview>
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
