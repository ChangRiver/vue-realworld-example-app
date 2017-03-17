<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">

          <form>
            <fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title">
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Waht's this article about?"
                  v-model="article.description">
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  rows="8"
                  class="form-control"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body">
                </textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagInput">

                <div class="tag-list">
                  <span class="tag-default tag-pill">
                    <i class="ion-close-round"></i>
                  </span>
                </div>
              </fieldset>

              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                :disabled="inProgress"
                @click="submitForm">
                Publish Article
              </button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../services/api'
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        inProgress: false,
        article: {
          title: '',
          description: '',
          body: ''
        },
        tagInput: '',
        tagList: []
      }
    },
    methods: {
      submitForm() {
        this.inProgress = true;
        api.Articles.create(this.article)
          .then(res => {
          this.inProgress = false;
          console.log('article created ', res)
        }, err => console.log(err))
      },
      onLoad() {
        if(this.$route.params.slug) {
          api.Articles.get(this.$route.params.slug)
            .then(res => {
            console.log('editor page onload data ', res)
          })
        }
      }
    }
  }
</script>
