<template>
  <div class="bug">
    <router-link :to="{name: 'notes', params: {id: bugData.id}}">
      <tr>
        <td>{{bugData.title}}</td>
        <td>{{bugData.reportedBy}}</td>
        <td v-if="!bugData.closed">Open</td>
        <td v-else>Closed</td>
      </tr>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  mounted() {},
  data() {
    return;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
