<template>
  <form class="card comment-form">
    <div class="card-block">
      <textarea
        class="form-control"
        placeholder="Write a comment..."
        v-model="comment.body">
      </textarea>
    </div>
    <div class="card-footer">
      <img :src="currentUser.image" class="comment-author-img">
      <button
        @click.prevent="submitForm"
        class="btn btn-sm btn-primary"
        type="submit">
        Post Comment
      </button>
    </div>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        comment: {
          body: ''
        }
      }
    },
    props: ['currentUser', 'slug'],
    methods: {
      submitForm() {
        const slug = this.slug;
        const body = this.comment.body;
        this.$store.dispatch('createComment', {slug, body});
        this.comment.body = "";
      }
    }
  }
</script>
