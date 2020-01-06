<template>
  <div>
    <button type="button" @click.prevent="show" class="btn btn-success">Add</button>
    <div class="row modal-view">
      <modal name="modal-note" @opened="opened">
        <form @submit.prevent="createNote">
          <div class="form-group col-12 name">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="newNote.reportedBy" ref="name" />
          </div>
          <div class="form-group col-12 message">
            <label for="message">Message</label>
            <textarea class="form-control" rows="3" id="message" v-model="newNote.content"></textarea>
          </div>
          <div class="col-12" id="button">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        bug: this.$store.state.activeBug.id
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("modal-note");
    },
    opened() {
      this.$refs.name.focus();
    },
    hide() {
      this.$modal.hide("modal-note");
    },
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        reportedBy: "",
        content: ""
      };
      this.$modal.hide("modal-note");
    }
  }
};
</script>

<style scoped>
.modal-view {
  margin: auto;
}
.name {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.message {
  display: flex;
  flex-direction: column;
}
#button {
  display: flex;
  justify-content: flex-end;
}
</style>