import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// import buefy
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);
