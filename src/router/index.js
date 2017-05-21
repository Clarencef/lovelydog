import Vue from "vue";
import Router from "vue-router";
import Main from "../container/main";
import About from "../container/About";
import Blog from "../container/Blog";
import Location from "../container/Location";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/location",
      name: "Location",
      component: Location
    }
  ]
});
