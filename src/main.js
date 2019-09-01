import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Slick from 'vue-slick';
import jquery from 'jquery';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Slick,
  jquery,
  render: h => h(App)
}).$mount("#app");
