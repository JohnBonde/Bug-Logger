<template>
  <tr class="note">
    <td>{{notesData.reportedBy}}</td>
    <td>{{notesData.content}}</td>
    <td>
      <i @click="deleteNote" class="fas fa-trash"></i>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Note",
  props: ["notesData"],
  methods: {
    deleteNote() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("deleteNote", this.notesData.id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>