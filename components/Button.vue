<template>
  <a href="/Adam_Rashid_CV_Latest.pdf" download>
    <button>{{ displayedText }}</button>
  </a>
</template>

<script>
export default {
  props: ["displayedText"],
};
</script>

<style scoped>
button {
  background: none;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 28px;
  border: solid #221284 2px;
  color: #221284;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 48px;
  cursor: pointer;
}
</style>