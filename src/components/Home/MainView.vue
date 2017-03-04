<template>
  <div class="col-md-9">
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">

        <li class="nav-item">
          <a
            href=""
            class="nav-link active">
            Global Feed
          </a>
        </li>

      </ul>
    </div>

    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '../ArticleList';
export default {
  data() {
    return {

    }
  },
  components: {
    ArticleList: ArticleList
  }
}
</script>
