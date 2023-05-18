# Vue 3 + TypeScript + Vite
    创建项目
    npm create vite@latest
    启动
    npm start
    打包
    npm run build

# 基础配置
      vite --open  浏览器自动打开

      安装eslint
      npm i eslint -D

      生成 .eslintrc.cjs
      npx eslint --init  

      vue3环境代码校验插件
      pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser

      .eslintignore 忽略文件

      package.json新增两个运行脚本

      配置**prettier**
      pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier

      配置stylelint
      pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D

      .stylelintrc.cjs

      配置husky
      pnpm install -D husky
      执行
      npx husky-init