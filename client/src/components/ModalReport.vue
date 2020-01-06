<template>
  <div>
    <button type="button" @click.prevent="show" class="btn btn-outline-dark" id="report">Report</button>
    <div class="row modal-view">
      <modal name="modal-report" @opened="opened">
        <form @submit.prevent="createBug">
          <div class="form-group col-12 area">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              rows="1"
              id="description"
              v-model="newBug.description"
              ref="description"
            ></textarea>
          </div>
          <div class="form-group col-12 title">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" v-model="newBug.title" />
          </div>
          <div class="form-group col-12 name">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" v-model="newBug.reportedBy" />
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
      newBug: {
        description: "",
        title: "",
        reportedBy: ""
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("modal-report");
    },
    opened() {
      this.$refs.description.focus();
    },
    hide() {
      this.$modal.hide("modal-report");
    },
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        description: "",
        title: "",
        reportedBy: ""
      };
      this.$modal.hide("modal-report");
    }
  }
};
</script>
<style scoped>
.area {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: column;
}
.name {
  display: flex;
  flex-direction: column;
}
#report {
  margin-top: -130px;
  height: 40px;
  width: 100px;
}
#button {
  display: flex;
  justify-content: flex-end;
}
</style>