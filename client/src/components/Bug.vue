<template>
  <tr class="bug">
    <router-link :to="{name: 'notes', params: {id: bugData.id}}">
      <td>{{bugData.title}}</td>
    </router-link>
    <td>{{bugData.reportedBy}}</td>
    <td v-if="!bugData.closed" id="open">Open</td>
    <td v-else id="closed">Closed</td>
    <td>{{bugData.updatedAt}}</td>
  </tr>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  computed: {
    date() {
      let date = this.$store.state.bugs;
      console.log(date);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#open {
  color: green;
}
#closed {
  color: red;
}
</style>
