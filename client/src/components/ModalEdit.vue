<template>
  <div v-if="!bug.closed">
    <button type="button" @click.prevent="show" class="btn btn-primary">Edit</button>
    <div class="row modal-view">
      <modal name="modal-edit" @opened="opened">
        <form @submit.prevent="editBug">
          <div class="form-group col-12 edit">
            <label for="description">Edit Description</label>
            <textarea
              class="form-control"
              rows="3"
              id="description"
              v-model="changeBug.description"
              ref="description"
            ></textarea>
          </div>
          <div class="col-12 button">
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
      changeBug: {
        description: "",
        _id: this.$route.params.id
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("modal-edit");
    },
    opened() {
      this.$refs.description.focus();
    },
    hide() {
      this.$modal.hide("modal-edit");
    },
    editBug() {
      let change = { ...this.changeBug };
      this.$store.dispatch("editBug", change);
      this.changeBug = {
        description: ""
      };
      this.$modal.hide("modal-edit");
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style scoped>
modal {
  height: auto;
}
.modal-view {
  display: flex;
}
.edit {
  display: flex;
  flex-direction: column;
  margin-top: 3em;
}
.button {
  display: flex;
  justify-content: flex-end;
}
</style>