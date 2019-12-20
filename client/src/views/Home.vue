<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col" id="report">
        <button type="button" class="btn btn-outline-dark">Report</button>
      </div>
    </header>
    <main class="row"></main>
    <Bugs />
  </div>
</template>

<script>
// @ is an alias to /src
import Bugs from "@/components/Bugs.vue";

export default {
  name: "home",
  components: {
    Bugs
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
