import Vue from "vue";
import Vuex from "vuex";

import UserInfo from "./entity/UserInfo";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: UserInfo
  },
  getters: {},
  mutations: {},
  actions: {}
});
