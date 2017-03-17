<template>
  <span v-if="canModify">

    <router-link
      :to="'/editor/' + article.slug"
      class="btn btn-outline-secondary btn-sm">
      <i class="ion-edit"></i> Edit Article
    </router-link>

    <button class="btn btn-outline-danger btn-sm" @click="delArticle(article.slug)">
      <i class="ion-trash-a"></i> Delete Article
    </button>

  </span>

  <span v-else></span>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['article', 'canModify'],
  methods: {
    ...mapActions(['delArticle']),
    del(slug) {
      this.delArticle(slug);
      this.$router.push('/')
    }
  }
}
</script>
