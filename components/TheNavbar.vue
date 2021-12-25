<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <img src="~static/adamrashid.svg" alt="Site Logo" />
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': isVisible }"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isVisible }"
    >
      <div class="navbar-end">
        <NuxtLink class="navbar-item" to="/"><strong>Blog</strong></NuxtLink>
        <NuxtLink class="navbar-item" to="/projects"
          ><strong>Projects</strong></NuxtLink
        >
        <NuxtLink class="navbar-item" to="/about"
          ><strong>About</strong></NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: transparent;
}

.navbar-item {
  color: #6f65ab;
  font-size: 20px;
  text-transform: uppercase;
}

/* Max width is $tablet - 1 */
/* This determines the look of .navbar-item in the mobile dropdown menu by removing some styling and making the colour uniform*/
@media screen and (max-width: 1023px) {
  .navbar-end .navbar-item {
    color: #221284;
    padding: 12px 24px;
    text-decoration: none;
  }

  .navbar-end .navbar-item:active,
  .navbar-end .navbar-item:hover {
    background-color: #dedee9;
  }

  .navbar-menu {
    border-radius: 6px;
  }
}

.navbar-item:hover,
.navbar-item:focus,
.navbar-item:focus-within {
  color: #221284;
  background-color: initial;
}

nav {
  padding-top: 36px;
  padding-bottom: 36px;
}

a.nuxt-link-exact-active {
  color: #221284;
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>