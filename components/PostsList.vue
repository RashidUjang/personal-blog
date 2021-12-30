<template>
  <div>
    <PostSnippet v-for="post in posts" :key="post.title" :title="post.title" :excerpt="post.excerpt" :createdAt="post.createdAt" :path="post.path">{{post.path}}</PostSnippet>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    this.posts = this.getPosts();
  },
  methods: {
    ...mapGetters("posts", ["getPosts"]),
  },
};
</script>

<style scoped>
div:first-child {
  margin-top: 56px;
}
</style> 