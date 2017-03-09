<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ comment.body }}</p>
    </div>
    <div class="card-footer">
      <router-link
        to="'@' + comment.author.username"
        class="comment-author">
        <img :src="comment.author.image" class="comment-author-img">
      </router-link>
      &nbsp;
      <router-link
        to="'@' + comment.author.username"
        class="comment-author">
        {{ comment.author.username }}
      </router-link>
      <span class="date-posted">
        {{ new Date(comment.createdAt).toDateString() }}
      </span>
      <delete-button v-show="show" :slug="slug" :commentId="comment.id"></delete-button>
    </div>
  </div>
</template>
<script>
  import DeleteButton from './DeleteButton'
  export default {
    props: ['currentUser', 'slug', 'comment'],
    computed: {
      show() {
        return this.currentUser &&
            this.currentUser.username === this.comment.author.username;
      }
    },
    components: {
      DeleteButton: DeleteButton
    }
  }
</script>
<style>
  .card { text-align: left; }
</style>
