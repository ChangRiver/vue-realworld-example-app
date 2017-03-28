<template>
  <div class="article-meta">
    <router-link :to="'/@' + article.author.username">
      <img :src="article.author.image" alt="">
    </router-link>

    <div class="info">
      <router-link class="author" :to="'/@' + article.author.username">
        {{ article.author.username }}
      </router-link>
      <span class="date">
        {{ new Date(article.createdAt).toDateString() }}
      </span>
    </div>

    <article-actions :canModify="canModify" :article="article"></article-actions>
  </div>
</template>
<script>
  import ArticleActions from './ArticleActions'
  export default {
    props: ['article', 'canModify'],
    components: {
      ArticleActions: ArticleActions
    }
  }
</script>
