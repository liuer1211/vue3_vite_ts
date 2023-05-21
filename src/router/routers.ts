const routes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    name: "login",
  },
  {
    path: "/404",
    component: () => import("../views/404.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];

export default routes;
