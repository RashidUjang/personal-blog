<template>
  <div>
    <hr />
    <p>Copyright © {{currentYear}} | Che Adam Rashid</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
hr {
  height: 1px;
  background-color: #958d88;
}

p {
  color: #221284;
  text-align: center;
}

div {
  margin-bottom: 24px;
}
</style>