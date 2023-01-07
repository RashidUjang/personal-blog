<template>
  <div class="container">
    <TheNavbar></TheNavbar>
    <HeroIntroduction :description="about[0].description" :title="about[0].title"></HeroIntroduction>
    <NuxtContent :document="about[0]"></NuxtContent>
    <Button :displayedText="'DOWNLOAD CV'"></Button>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      about: this.getAbout(),
    };
  },
  methods: {
    ...mapGetters(["getAbout"]),
  },
  head() {
    return {
      title: "About | Adam Rashid",
    };
  },
};
</script>

<style scoped>
/* Deep selectors needed to style nested components*/
/deep/ p {
  margin-top: 0.5rem;
}

/deep/ p:first-of-type {
  margin-top: 24px;
}
</style>
