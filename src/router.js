import Vue from "vue";
import Home from "./views/Home.vue";
import Iniciar_sesion from "./views/Iniciar_sesion.vue";
import VueRouter from 'vue-router'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/iniciar_sesion",
        name: "iniciar_sesion",
        component: Iniciar_sesion    
  
      }
  ];

  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;