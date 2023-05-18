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

        pnpm run format

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

        import ElementPlus from 'element-plus';
        import 'element-plus/dist/index.css'
        //@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
        import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
        app.use(ElementPlus, {
            locale: zhCn
        })

        //@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
        import zhCn from 'element-plus/dist/locale/zh-cn.mjs' 

        **Element Plus全局组件类型声明**
        // tsconfig.json
        {
            "compilerOptions": {
                // ...
                "types": ["element-plus/global"]
            }
        }

        src别名的配置
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

        TypeScript 编译配置
        // tsconfig.json
        {
            "compilerOptions": {
                "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
                "paths": { //路径映射，相对于baseUrl
                "@/*": ["src/*"] 
                }
            }
        }

        环境变量的配置
        .env.development
        .env.development
        .env.test

        "dev": "vite --open",
        "build:test": "vue-tsc && vite build --mode test",
        "build:pro": "vue-tsc && vite build --mode production",
        "build": "vue-tsc --noEmit && vite build",
        "preview": "vite preview",

        SVG图标配置
        pnpm install vite-plugin-svg-icons -D

        import {defineConfig} from 'vite'
        import vue from '@vitejs/plugin-vue'
        import path from 'path'
        import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
        export default defineConfig({
            plugins: [
            vue(),
            createSvgIconsPlugin({
                // Specify the icon folder to be cached
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                // Specify symbolId format
                symbolId: 'icon-[dir]-[name]',
            }),
            ],
            resolve: {
                alias: {
                    "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
                }
            }
        })

        **入口文件导入**
        import 'virtual:svg-icons-register'

        src/assets/icons

        局部组件
        SvgIcon/index.vue

        全局组件
        先 app.use
        再 install()


        集成sass