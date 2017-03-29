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
                  v-model="tagInput" @keyup.13="addTag">

                <div class="tag-list">
                  <span v-for="tag in article.tagList" class="tag-default tag-pill" :key="tag">
                    <i class="ion-close-round" @click="removeTagHandler(tag)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>

              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                :disabled="inProgress"
                @click.prevent="submitForm">
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
          body: '',
          tagList: []
        },
        tagInput: ''
      }
    },
    mounted() {
      this.onLoad()
    },
    methods: {
      addTag() {
        if(this.tagInput !== null) {
          this.article.tagList.push(this.tagInput);
        }
        this.tagInput = '';
      },
      submitForm() {
        this.inProgress = true;
        const slug = { slug: this.$route.params.slug };
        if(this.$route.params.slug) {
          api.Articles.update(Object.assign(this.article, slug))
            .then(res => {
              this.inProgress = false;
              console.log('article update ', res)
              const redirectUrl = `article/${res.article.slug}`;
              this.$router.push(redirectUrl);
            }, err => console.log(err))
        } else {
          api.Articles.create(this.article)
            .then(res => {
              this.inProgress = false;
              console.log('article created ', res)
              const redirectUrl = `article/${res.article.slug}`;
              this.$router.push(redirectUrl);
            }, err => console.log(err))
        }
      },
      removeTagHandler(tag) {
        const idx = this.article.tagList.indexOf(tag);
        this.article.tagList.splice(idx, 1);
      },
      onLoad() {
        if(this.$route.params.slug) {
          api.Articles.get(this.$route.params.slug)
            .then(res => {
            this.article.title = res.article.title;
            this.article.description = res.article.description;
            this.article.body = res.article.body;
            this.article.tagList = res.article.tagList;
          })
        }
      }
    }
  }
</script>
