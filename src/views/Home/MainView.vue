<template>
  <div class="col-md-9">
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">

        <li class="nav-item">
          <a
            href=""
            class="nav-link"
            :class="{'active': tab === 'feed'}"
            @click.prevent="onFeedTab">
            Your Feed
          </a>
        </li>

        <li class="nav-item">
          <a
            href=""
            class="nav-link"
            :class="{'active': tab === 'all'}"
            @click.prevent="onGlobalFeedTab">
            Global Feed
          </a>
        </li>

        <li v-if="tag" class="nav-item">
          <a href="" class="nav-link active">
            <i class="ion-pound"></i> {{ tag }}
          </a>
        </li>
      </ul>
    </div>

    <article-list
      :articles="articles"
      :articlesCount="articlesCount"
      :currentPage="currentPage"
      @onSetPage="onSetPage">

    </article-list>
  </div>
</template>

<script>
import api from '../../services/api';
import ArticleList from '../../components/ArticleList';
import { mapState, mapMutations } from 'vuex';
export default {
  components: {
    ArticleList: ArticleList
  },
  computed: mapState(['articles', 'token', 'tab', 'tag', 'articlesCount', 'currentPage']),
  methods: {
    ...mapMutations(['CHANGE_TAB', 'SET_PAGE']),
    onFeedTab() {
      if(this.token) {
        let feedType = 'feed';
        api.Articles.feed()
          .then(res => {
          this.CHANGE_TAB({ feedType, ...res })
        })
      }
    },
    onGlobalFeedTab() {
      let feedType = 'all';
      api.Articles.all()
        .then(res => {
        this.CHANGE_TAB({ feedType, ...res })
      })
    },
    async onSetPage(page) {
      const currentPage = page;
      let articles;
      let articlesPromise = this.tab === 'feed' ?
        api.Articles.feed(page) :
        api.Articles.all(page)
      await articlesPromise.then(res => articles = res)
      this.SET_PAGE({ currentPage, ...articles })
    }
  }
}
</script>
