import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    setNotes(state, data) {
      state.notes = data;
    },
    addNote(state, note) {
      state.notes.push(note);
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async editBug({ commit, dispatch }, change) {
      let res = await _api.put("bugs/" + change._id, change);
      commit("setActiveBug", res.data);
      dispatch("getBugById");
    },
    async deleteBug({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setNotes", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },
    async deleteNote({ commit, dispatch }, id) {
      await _api.delete("notes/" + id);
      dispatch("getNotesByBugId");
    }
  },
  modules: {}
});
