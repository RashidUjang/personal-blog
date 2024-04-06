<template>
  <div class="tile is-ancestor">
    <!-- TODO: Display grid dynamically from a list and stack vertically -->
    <Tile
      v-for="project in projects"
      :key="project.title"
      :src="project.img"
      :link="project.link"
      :title="project.title"
      :year="project.year"
      :description="project.description"
    ></Tile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      projects: this.getProjects(),
    };
  },
  methods: {
    ...mapGetters(["getProjects"]),
  },
};
</script>
<style scoped>
.tile {
  margin-top: 48px;
}
</style>