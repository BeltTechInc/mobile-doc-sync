import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";

import auth from "./auth";
import user from "./user";
import uploads from "./uploads";

Vue.use(Vuex);
let store = null;
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      user,
      uploads,
    },
    mutations: {
      ...vuexfireMutations,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });
  store = Store;
  return Store;
}

export { store };
