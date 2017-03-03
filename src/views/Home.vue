<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A sample to learn <i>Vue 2</i> knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link">
                  Your Feed
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Global Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>


          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<style>
  .nav-link {
    cursor:pointer;
  }
</style>
