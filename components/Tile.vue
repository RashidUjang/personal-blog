<template>
  <div class="tile is-4">
    <a :href="link">
      <img :src="'/images/projects/' + src" alt="" />
      <h5 class="title is-5 has-text-centered">{{ title }}</h5>
    </a>
  </div>
</template>

<script>
export default {
  props: ["src", "link", "title"],
};
</script>

<style scoped>
h5 {
  color: #221284;
  font-weight: 500;
}

img {
  border-radius: 6px;
}

.tile {
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: column;
}
</style>