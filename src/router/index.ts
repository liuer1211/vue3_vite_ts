import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routers";

let router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
