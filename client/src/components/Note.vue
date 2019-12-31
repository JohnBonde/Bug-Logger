<template>
  <div class="note">
    <tr>
      <td>{{notesData.reportedBy}}</td>
      <td>{{notesData.content}}</td>
      <td>
        <i @click="deleteNote" class="fas fa-trash"></i>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["notesData"],
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.notesData.id);
    }
  }
};
</script>

<style>
</style>