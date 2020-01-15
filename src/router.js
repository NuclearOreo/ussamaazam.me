import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Problems from "./views/problems.vue";
import Photos from "./views/photos.vue";

Vue.use(Router);

const mobileGuard = (to, from, next) => {
  if (
    to.name == "problems" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  ) {
    next("/");
  } else {
    next();
  }
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/problems",
      name: "problems",
      component: Problems,
      beforeEnter: mobileGuard
    },
    {
      path: "/Photos",
      name: "photos",
      component: Photos
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name) next();
  else next("/");
});

export default router;
