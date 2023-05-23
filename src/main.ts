import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/index.scss";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import router from "./router/index";

import pinia from "./store/index";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
app.use(router);
app.mount("#app");

// 046
// 数据大屏独立展示
// 路由组件 留坑 加入插槽
