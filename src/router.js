import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import Anbieter from "./views/Anbieter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/anbieter",
      name: "anbieter",
      component: Anbieter
    }
  ]
});
