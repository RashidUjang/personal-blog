<template>
  <div class="container">
    <TheNavbar></TheNavbar>
    <div class="headings">
      <h1 class="title is-1 has-text-centered">404</h1>
      <h2 class="subtitle is-2 has-text-centered">PAGE NOT FOUND</h2>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Page Not Found | Adam Rashid",
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  color: #221284;
}

.headings {
  margin-top: 30vh;
  margin-bottom: 30vh;
}
</style>
