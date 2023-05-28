# Vue 3 + TypeScript + Vite

      yarn create vite
      yarn install
      yarn run dev

# 配置

      "start": "npm run dev",
      "dev": "vite --open",
      启动：yarn start

# eslint 配置

      yarn add eslint -D
      npx eslint --init

      .eslintignore
      .eslintrc.cjs

# vue3 校验

      yarn add -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser

      "lint": "eslint src",       检查错误
      "fix": "eslint src --fix"   纠正错误

# prettier 格式化

      yarn add -D eslint-plugin-prettier prettier eslint-config-prettier

      .prettierrc.json添加规则
      .prettierignore忽略文件

# stylelint 配置

      yarn add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D

      .stylelintrc.cjs
      .stylelintignore忽略文件

      // format 直接格式化
      "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
      "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
      "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",

# 环境变量配置

      .env.development
      .env.production
      .env.test

      "build:test": "vue-tsc && vite build --mode test",
      "build:pro": "vue-tsc && vite build --mode production",

# sass

      在src/styles目录下创建一个index.scss reset.scss variable.scss文件
      main.ts 引入 import "@/styles/index.scss";
      在vite.config.ts文件配置如下:
      export default defineConfig((config) => {
            css: {
                        preprocessorOptions: {
                              scss: {
                                    javascriptEnabled: true,
                                    additionalData: '@import "./src/styles/variable.scss";',
                              },
                        },
                  },
            }
      }

# element-plus

      yarn add element-plus @element-plus/icons

      **入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文**
            import ElementPlus from 'element-plus';
            import 'element-plus/dist/index.css'
            //@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
            import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
            app.use(ElementPlus, {
            locale: zhCn
            })

      **Element Plus全局组件类型声明**
            // tsconfig.json
            {
            "compilerOptions": {
            // ...
            "types": ["element-plus/global"]
            }
            }

# src 别名的配置

            // vite.config.ts
            import {defineConfig} from 'vite'
            import vue from '@vitejs/plugin-vue'
            import path from 'path'
            export default defineConfig({
                  plugins: [vue()],
                  resolve: {
                        alias: {
                              "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
                        }
                  }
            })

            // tsconfig.json
            {
                  "compilerOptions": {
                        "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
                        "paths": { //路径映射，相对于baseUrl
                              "@/*": ["src/*"]
                        }
                  }
            }

# vue-router

      yarn add vue-router@4

# pinia

      yarn add pinia

# axios

      yarn add axios

# echarts


# 路由鉴权
      1.登录 不能再跳转登录
      2.没登录不能跳转首页
      3.其他页面刷新 用户信息消失
      4.进度条
      5.token过期 返回登录
      