<template>
<div class="article-preview">
  <div class="article-meta">
    <router-link :to="'@' + article.author.username">
      <img :src="article.author.image" alt="">
    </router-link>

    <div class="info">
      <router-link class="author" :to="'@' + article.author.username">
        {{ article.author.username }}
      </router-link>
      <span class="date">
        {{ new Date(article.createdAt).toDateString() }}
      </span>
    </div>

    <div class="pull-xs-right">
      <button
        class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
  </div>

  <router-link :to="'article/' + article.slug" class="preview-link">
    <h1>{{article.title}}</h1>
    <p>{{article.description}}</p>
    <span>Read more...</span>
    <ul class="tag-list">
      <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList">
        {{ tag }}
      </li>
    </ul>
  </router-link>
</div>
</template>
<script>
  export default {
    props: ['article']
  }
</script>

<style>
  .article-preview { text-align: left; }
</style>
