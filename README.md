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
        .prettierrc.json添加规则
        .prettierignore忽略文件

        配置stylelint
        pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D

        .stylelintrc.cjs
        .stylelintignore忽略文件

        配置husky
        pnpm install -D husky
        执行
        npx husky-init

        配置commitlint
        pnpm add @commitlint/config-conventional @commitlint/cli -D

        commitlint.config.cjs

        package.json
        "commitlint": "commitlint --config commitlint.config.cjs -e -V"

        配置husky   
        npx husky add .husky/commit-msg 

        #!/usr/bin/env sh
        . "$(dirname -- "$0")/_/husky.sh"
        pnpm commitlint

        git commit -m "fix:xxx"

        强制使用pnpm包管理器工具
        在根目录创建`scritps/preinstall.js`文件，添加下面的内容
        if (!/pnpm/.test(process.env.npm_execpath || '')) {
            console.warn(
                `\u001b[33mThis repository must using pnpm as the package manager ` +
                ` for scripts to work properly.\u001b[39m\n`,
            )
            process.exit(1)
        }

# element-plus

        pnpm install element-plus @element-plus/icons-vue