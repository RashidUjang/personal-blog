<template>
  <div class="tile is-4">
    <a :href="link">
      <img :src="'/images/projects/' + src" alt="" />
      <h5 class="title is-5 mb-1 has-text-weight-semibold">
        {{ title }}
      </h5>
      <h6 class="title is-6 mb-1 has-text-weight-normal is-italic">
        {{ year }}
      </h6>
      <h6 class="title is-6 mb-1 has-text-weight-normal">
        {{ description }}
      </h6>
    </a>
  </div>
</template> 

<script>
export default {
  props: ["src", "link", "title", "year", "description"],
};
</script>

<style scoped>
h5, h6 {
  color: #221284;
}

img {
  border-radius: 6px;
}

.tile {
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: column;
}

.title {
  margin-bottom: 0.5rem;
}
</style>