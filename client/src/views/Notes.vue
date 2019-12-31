<template>
  <div class="notes container-fluid">
    <main class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12" id="bug-title">
            <h1>{{bug.title}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-10" id="bug-reported">
            <h3>Reported By: {{bug.reportedBy}}</h3>
          </div>
          <div class="col-2">
            <div v-if="!bug.closed">
              <h3>Open</h3>
            </div>
            <div v-else>
              <h3>Closed</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-11" id="bug-description">
            <p>{{bug.description}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-11" id="close-button">
            <button type="button" @click="deleteBug" class="btn btn-danger">Close</button>
            <modal-edit />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12" id="notes-title">
            <h3>Notes</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-10" id="notes-table">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Message</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <Note :notesData="note" v-for="note in notes" :key="note.id" />
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-10" id="add-button">
            <modal-note />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Note from "@/components/Note";
import ModalNote from "@/components/ModalNote";
import ModalEdit from "@/components/ModalEdit";

export default {
  name: "notes",
  components: {
    Note,
    ModalNote,
    ModalEdit
  },
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
    console.log(this.$store.state.notes);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    deleteBug() {
      this.$store.dispatch("deleteBug", this.$route.params.id);
    },
    editBug() {
      this.$store.dispatch("editBug", this.$route.params.id);
    }
  }
};
</script>

<style>
#bug-title {
  display: flex;
  justify-content: flex-start;
  margin-left: 2em;
  margin-top: 1em;
}
#bug-reported {
  display: flex;
  justify-content: flex-start;
}
#bug-description {
  display: flex;
  justify-content: flex-start;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 5px;
  margin: auto;
}
#close-button {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0 0;
  margin: auto;
}
#add-button {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0 0;
  margin: auto;
}
#notes-title {
  display: flex;
  justify-content: flex-start;
}
#notes-table {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0;
}
</style>