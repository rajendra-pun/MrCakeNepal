import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Slick from "vue-slick";
import jquery from "jquery";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome start
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
// fontawesome ends

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Slick,
  jquery,
  render: h => h(App)
}).$mount("#app");
