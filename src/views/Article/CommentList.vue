<template>
  <div>
    <!--<pre>comments {{ comments }}</pre>-->
    <comment
      v-for="(aa, index) in comments"
      :comment="aa"
      :currentUser="currentUser"
      :slug="slug"
      :key="index">
    </comment>
  </div>
</template>
<script>
  import Comment from './Comment';
  export default {
    props: ['comments', 'slug', 'currentUser'],
    components: {
      Comment: Comment
    }
  }
</script>
