<template>
  <div v-if="article" class="article-page">

    <div class="banner">
      <div class="container">

        <h1 v-text="article.title"></h1>

        <article-meta :article="article" :canModify="canModify"></article-meta>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-xs-12">

          <ul class="tag-list">
            <li
              v-for="tag in article.tagList"
              :key="tag"
              class="tag-default tag-pill tag-outline">
              {{ tag }}
            </li>
          </ul>

        </div>
      </div>

      <hr>

      <div class="article-actions"></div>

      <div class="row">
        <comment-container
          :comments="comments"
          :slug="paramsId"
          :currentUser="currentUser">

        </comment-container>
      </div>

    </div>

  </div>
</template>

<script>
  import api from '../../services/api'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import ArticleMeta from './ArticleMeta'
  import CommentContainer from './CommentContainer'
  export default {
    computed: {
      canModify() {
        return this.currentUser &&
          this.currentUser.username === this.article.author.username;
      },
      paramsId() {
        return this.$route.params.id
      },
      comments() {

      },
      ...mapState([
        'currentUser',
        'article',
        'comments'
      ])
    },
    beforeMount() {
      this.getArticleDetail(this.paramsId)
      this.getComments(this.paramsId)
    },
    beforeDestroy() {
      this.ARTICLE_PAGE_UNLOADED()
    },
    methods: {
      ...mapMutations([
        'ARTICLE_PAGE_UNLOADED'
      ]),
      ...mapActions([
        'getArticleDetail',
        'getComments' ])
    },
    components: {
      ArticleMeta : ArticleMeta,
        CommentContainer: CommentContainer
    }
  }
</script>
