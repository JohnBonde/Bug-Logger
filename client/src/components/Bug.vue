<template>
  <tr class="bug">
    <router-link :to="{name: 'notes', params: {id: bugData.id}}">
      <td>{{bugData.title}}</td>
    </router-link>
    <td>{{bugData.reportedBy}}</td>
    <td v-if="!bugData.closed" id="open">Open</td>
    <td v-else id="closed">Closed</td>
    <td>{{this.newDate[0]}}</td>
  </tr>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  data() {
    return {
      newDate: this.bugData.updatedAt.split("T")
    };
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
