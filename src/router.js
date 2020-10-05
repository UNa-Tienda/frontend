import Vue from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Iniciar_sesion from "./views/Iniciar_sesion.vue";
import Router from "vue-router";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/iniciar_sesion",
      name: "iniciar_sesion",
      component: Iniciar_sesion,
    },
    {
      path: "/forgotPassword",
      name: "forgotPassword",
      component: ForgotPassword,
    },
  ],
});
