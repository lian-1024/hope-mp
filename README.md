# Getting Started
```js
// 安装依赖
pnpm i // or  npm i  or  yarn add

// 编译为微信小程序
pnpm dev:mp-weixin

// 使用微信开发者工具运行 dist/dev/mp-weixin
```

# Preview
<p align="center">
  <img src="https://github.com/lian-1024/public-welfare-mp/blob/main/.github/images/preview.png?raw=true" width="300"/>
</p>

<h2 align="center">
社会公益小程序
</h2>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 📑 [布局系统](./src/layouts)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) - 保证代码质量

- 🍍 [Pinia](https://pinia.vuejs.org/zh/) - 状态管理

- 📡 [Axios](https://www.axios-http.cn/docs/intro)- 网络请求

- ✒️ [Uni-UI](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html) - UniApp官方组件库

- ⚒️ [Uni-Use](https://uni-helper.js.org/uni-use) - 组合式工具集

```
Benefit
├── .github
├── .husky                        // husky钩子
├── dist                          // 编译后的文件
├── src
|  ├── api                        // 定义接口
|  ├── components                 // 定义组件
|  ├── composables                // 组合式函数
|  ├── layout                     // 定义布局
|  ├── pages                      // 定义页面
|  |   ├── dynamic                // 发现页
|  |   ├── index                  // 首页
|  |   ├── my                     // 个人中心页
|  |   ├── volunteer-activity     // 志愿活动页
|  ├── static                     // 静态文件
|  ├── store                      // 状态管理
|  ├── types                      // 类型定义
|  ├── utils                      // 工具
|  ├── App.vue
|  ├── auto-import.d.ts           // 自动导入类型定义
|  ├── components.d.ts            // 组件类型定义
|  ├── env.d.ts                   // 环境变量类型定义
|  ├── main.ts
|  ├── manifest.json
|  ├── pages.json
|  ├── shims.json                 // 适配文件
|  ├── theme.json                 // 定义主题色
|  ├── uni-pages.json
|  └── uni.scss
├── .editorconfig                 //编码规范
├── commitlint.config.js          // commitlint 提交规范 配置
├── eslint.config.mjs
├── index.html
├── package.json
├── renovate.json                 // renovate 监控第三发依赖更新
├── tsconfig.json
├── vite.config.ts
├── .env.development              // 开发环境变量
├── .env.development              // 生产环境变量
├── manifest.config.ts            // 同 manifest.json
├── pages.config.ts               // 同 pages.json
├── uno.config.ts                 // unocss 配置
```
