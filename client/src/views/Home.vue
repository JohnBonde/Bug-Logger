<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col" id="report">
        <button
          id="show-modal"
          @click="showModal = true"
          type="button"
          class="btn btn-outline-dark"
        >Report</button>
        <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">Report Bug</h3>
        </modal>
      </div>
    </header>
    <main class="row">
      <div class="col-10">
        <h3>Current Bugs</h3>
        <div class="row">
          <div class="col-12" v-for="bug in bugs" :key="bug.id">
            <Bug :bugData="bug" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Bug from "@/components/Bug.vue";

export default {
  name: "home",
  components: {
    Bug
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
<style>
#report {
  display: flex;
  justify-content: flex-end;
}
button {
  margin-top: -4.5em;
  height: 40px;
  width: 100px;
}
</style>
