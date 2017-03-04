<template>
  <div>
    <!--<div v-if="!articles" class="article-preview">Loading...</div>-->
    <!--<div v-if="articles.length === 0" class="article-preview">-->
      <!--No articles are here... yet.-->
    <!--</div>-->
    <div>
      <h2 v-for="article in articles">{{ article.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['articles']
}
</script>
