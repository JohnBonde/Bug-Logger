<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col" id="reporter">
        <modal-report />
      </div>
    </header>
    <main class="row">
      <div class="col-12" id="title-1">
        <h3>Current Bugs</h3>
        <h4>This site is having trouble accessing the database and will be working soon.</h4>
        <div class="row">
          <div class="col">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Reported By</th>
                  <th scope="col">Status</th>
                  <th scope="col">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <Bug :bugData="bug" v-for="bug in bugs" :key="bug.id" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Bug from "@/components/Bug.vue";
import ModalReport from "@/components/ModalReport.vue";

export default {
  name: "home",
  components: {
    Bug,
    ModalReport
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>
<style scoped>
/* #title-1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
} */
#reporter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
