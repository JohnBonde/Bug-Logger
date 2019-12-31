<template>
  <div v-if="!bug.closed">
    <button type="button" @click.prevent="show" class="btn btn-primary">Edit</button>
    <div class="row">
      <modal name="modal-edit" @opened="opened">
        <form @submit.prevent="editBug">
          <div class="form-group col-12">
            <label for="description">Edit Description</label>
            <textarea
              class="form-control"
              rows="3"
              id="description"
              v-model="changeBug.description"
              ref="description"
            ></textarea>
          </div>
          <div class="col-12">
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
        description: ""
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
      let update = { ...this.changeBug };
      debugger;
      this.$store.dispatch("editBug", this.$route.params.id, update);
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
  height: 300px;
}
</style>