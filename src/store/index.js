import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import store from "./store";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    store,
  },
  plugins: debug ? [createLogger()] : [],
});
