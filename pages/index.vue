<template>
  <div class="container">
    <TheNavbar></TheNavbar>
    <SocialLinksSmall></SocialLinksSmall>
    <PostsList></PostsList>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Adam Rashid",
    };
  },
};
</script>

<style>
/* TODO: Decide if this should be placed in body somehow */
p {
  font-size: 1.2rem;
  color: #332f2c;
}
</style>