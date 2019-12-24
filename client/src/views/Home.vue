<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col" id="report">
        <modal-report />
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
import ModalReport from "@/components/ModalReport.vue"

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
<style>
#report {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
button {
  margin-top: -130px;
  height: 40px;
  width: 100px;
}
</style>
