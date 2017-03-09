<template>
  <div v-if="currentUser" class="col-xs-12 col-md-8 offset-md-2">
    <div>
      <list-errors></list-errors>
      <comment-input :slug="slug" :currentUser="currentUser"></comment-input>
    </div>

    <comment-list
      :comments="comments"
      :slug="slug"
      :currentUser="currentUser">
    </comment-list>
  </div>

  <div v-else class="col-xs-12 col-md-8 offset-md-2">
    <p>
      <router-link to="/login">Sign in</router-link>
      &nbsp;or&nbsp;
      <router-link to="/register">Sign up</router-link>
      &nbsp;to add comments on this article.
    </p>

    <comment-list
      :comments="comments"
      :slug="slug"
      :currentUser="currentUser">
    </comment-list>
  </div>
</template>
<script>
  import CommentInput from './CommentInput';
  import CommentList from './CommentList';
  import ListErrors from '../../components/ListErrors';

  export default {
    props: ['comments', 'slug', 'currentUser'],
    components: {
      CommentInput: CommentInput,
      CommentList: CommentList,
      ListErrors: ListErrors
    }
  }
</script>
