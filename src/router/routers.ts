const routes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    name: "login",
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
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
