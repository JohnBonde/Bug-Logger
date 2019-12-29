<template>
  <div class="notes container-fluid"></div>
</template>

<script>
export default {
  name: "notes",
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style>
</style>