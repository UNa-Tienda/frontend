import Vue from "vue";
import Home from "./views/Home.vue";
import Iniciar_sesion from "./views/Iniciar_sesion.vue";
import Router from "vue-router";
import Register from "./views/Register";

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
      path: "/iniciar_sesion",
      name: "iniciar_sesion",
      component: Iniciar_sesion,
    },
  ],
});

