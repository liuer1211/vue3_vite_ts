import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' 
//国际化

const app =  createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
import 'virtual:svg-icons-register'
// 全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon',SvgIcon)
import GlobalComponents from '@/components'
app.use(GlobalComponents);
app.mount("#app");
