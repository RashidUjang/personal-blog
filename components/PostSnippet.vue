<template>
  <div class="post-snippet">
    <NuxtLink :to="path">
      <h2 class="title is-2">{{ title }}</h2>
    </NuxtLink>

    <h4 class="title is-4">{{ this.formattedDate }}</h4>
    <NuxtContent :document="{ body: excerpt }" />
    <!-- TODO: Use an icon instead of the button -->
    <button><NuxtLink :to="path">Read More →</NuxtLink></button>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: ["title", "excerpt", "createdAt", "path"],
  data() {
    return {
      formattedDate: DateTime.fromISO(this.createdAt).toFormat("d LLLL y"),
    };
  },
};
</script>

<style scoped>
.title.is-2 {
  color: #221284;
  margin-bottom: 0px;
}

.title.is-4 {
  color: #828292;
  margin-bottom: 0px;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 8px;
}

.nuxt-content {
  margin-top: 24px;
}

.post-snippet {
  margin-top: 80px;
}

button {
  margin-top: 16px;
  outline: none;
  color: #221284;
  font-weight: 700;
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0px;
  cursor: pointer;
}
</style>