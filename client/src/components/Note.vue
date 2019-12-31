<template>
  <div class="note">
    <tr>
      <td>{{notesData.reportedBy}}</td>
      <td>{{notesData.content}}</td>
      <td>
        <i class="far fa-trash"></i>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["notesData"]
};
</script>

<style>
</style>