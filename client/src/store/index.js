import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    bugs: [],
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    }
  },
  modules: {}
});
