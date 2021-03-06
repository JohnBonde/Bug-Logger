import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Notes from "../views/Notes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/notes/:id",
    name: "notes",
    component: Notes
  }
];

const router = new VueRouter({
  routes
});

export default router;
