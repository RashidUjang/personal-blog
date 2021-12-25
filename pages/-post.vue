<template>
  <div class="container">
    <TheNavbar></TheNavbar>
    <h1 class="title is-1">{{ post.title }}</h1>
    <NuxtContent :document="post"></NuxtContent>
    <TheFooter></TheFooter>
  </div>
</template>

/<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      post: this.searchPost(this.postName),
    };
  },
  methods: {
    ...mapGetters("posts", ["getPosts"]),
    searchPost(title) {
      return this.getPosts().find((post) => post.slug == title);
    },
  },
  props: ["postName"],
  head() {
    return {
      title: this.post.title + " | Adam Rashid",
    };
  },
};
</script>

<style>
.nuxt-content h1 > a,
.nuxt-content h2 > a,
.nuxt-content h3 > a {
  position: absolute;
  margin-left: -1.75rem;
  padding-right: 0.5rem;
}

.nuxt-content h1 > a:before,
.nuxt-content h2 > a:before,
.nuxt-content h3 > a:before {
  content: url("~static/svg/icon-hashtag.svg");
  opacity: 0;
  fill: blue;
}

.nuxt-content h1:hover a:before,
.nuxt-content h2:hover a:before,
.nuxt-content h3:hover a:before {
  opacity: 1;
}

/* Handling on mobile screens 
  @media screen and (min-width: 1024px) {
  .nuxt-content h2 > a,
  .nuxt-content h3 > a {
    margin-left: 0;
  }
} */

.title.is-1 {
  color: #221284;
  /* margin-bottom: 0px; */
  font-weight: 900;
}

.nuxt-content img {
  margin: 0 auto;
  display: block;
  max-width: 100%;
}

/* a .icon.icon-link {
  background-image: url("~static/svg/icon-hashtag.svg");
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-left: -1.75rem;
  padding-right: 0.5rem;
  opacity: 1;
  fill: #6f65ab;
} */

.nuxt-content h2 {
  color: #221284;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 16px;
}

.nuxt-content h3 {
  color: #221284;
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 12px;
}

.nuxt-content .title.is-1 {
  color: #221284;
  margin-bottom: 0px;
  font-weight: 900;
}

.nuxt-content .nuxt-content-highlight > .filename {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 10;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #efebe8;
}

/* Required to set the position of .filename */
.nuxt-content .nuxt-content-highlight {
  position: relative;
}

.nuxt-content .nuxt-content-highlight pre {
  border-radius: 6px;
  font-size: 1rem;
  padding-top: 2rem;
}

.nuxt-content p + p {
  margin-top: 0.5rem;
}
</style>
