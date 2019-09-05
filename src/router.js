import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Faq from "./views/Faq.vue";
import Contact from "./views/Contact.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
});
