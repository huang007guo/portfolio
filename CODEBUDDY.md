# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## 项目概述

这是一个使用 React 19 + Vite 8 构建的现代个人作品集/博客网站，采用纯 CSS 样式（无 UI 框架依赖），具有响应式设计和移动端友好特性。

## 常用命令

### 开发服务器
```bash
npm run dev
```
启动 Vite 开发服务器，默认地址 http://localhost:5173，支持热模块替换（HMR）。

### 生产构建
```bash
npm run build
```
使用 Vite 构建生产版本，输出到 `dist/` 目录。

### 预览生产版本
```bash
npm run preview
```
本地预览生产构建结果。

### 代码检查
```bash
npm run lint
```
运行 ESLint 检查代码质量和 React Hooks 规则。

## 代码架构

### 整体结构

项目采用单页应用（SPA）架构，所有内容在一个页面内通过不同 section 展示。应用使用 React 19 的函数组件和 hooks，没有使用类组件。

```
main.jsx (入口)
  └─> App.jsx (主应用)
        ├─> Navbar (导航栏)
        ├─> Hero (首页大图)
        ├─> About (关于我)
        ├─> Projects (项目展示)
        ├─> Blog (博客文章)
        ├─> Contact (联系我)
        └─> footer (页脚)
```

### 组件设计模式

每个主要 section 采用**单文件组件 + 独立 CSS** 的模式：
- 组件文件：`src/components/ComponentName.jsx`
- 样式文件：`src/components/ComponentName.css`

所有组件都是默认导出（default export），在 App.jsx 中统一导入。

### 样式系统

**主题定制通过 CSS 变量实现**，定义在 `src/App.css` 的 `:root` 选择器中：

```css
:root {
  --primary-color: #2563eb;    /* 主色调 */
  --secondary-color: #64748b;  /* 副色调 */
  --accent-color: #3b82f6;    /* 强调色 */
  --bg-color: #ffffff;         /* 背景色 */
  --text-color: #1e293b;      /* 文字颜色 */
  --light-bg: #f8fafc;        /* 浅色背景 */
  --border-color: #e2e8f0;    /* 边框颜色 */
}
```

修改这些变量可以快速更换整个网站的主题色。

### 响应式设计

响应式断点统一在 `768px`，在 `App.css` 和各组件 CSS 中使用 `@media (max-width: 768px)` 实现移动端适配。

### 状态管理

当前项目**不使用外部状态管理库**（如 Redux、Zustand）。状态管理需求极少，仅使用 React 内置的 `useState` hook。如有需要，可引入 `useContext` 进行跨组件状态共享。

### 路由

当前为单页应用，**不使用客户端路由**（如 React Router）。所有内容在一个页面内通过锚点链接（`#section-id`）导航。

如需添加多页面路由，建议安装 `react-router-dom`。

### 静态资源

- 公共静态资源放在 `public/` 目录
- 组件专用资源（图片等）放在 `src/assets/` 目录
- 当前 Hero 和 Projects 组件使用占位符，待替换为真实图片

## 自定义开发指南

### 修改个人信息

编辑对应组件文件：
- **Hero.jsx** - 首页的名字、标题和介绍文案
- **About.jsx** - 关于我的描述、技能列表、统计数据
- **Projects.jsx** - 项目展示卡片数据
- **Blog.jsx** - 博客文章列表数据
- **Contact.jsx** - 联系信息和社交媒体链接

### 添加新 Section

1. 在 `src/components/` 创建新组件文件和对应 CSS 文件
2. 在 `App.jsx` 中导入并添加到 `<main>` 标签内
3. 如需在 Navbar 中添加导航链接，编辑 `src/components/Navbar.jsx`

### 集成后端/API

当前 Contact 表单是纯前端，不包含后端集成。如需集成：
- **Formspree** - 简单的表单处理服务
- **EmailJS** - 无需后端的邮件发送
- 或自建 API 接口

### 博客系统扩展

当前 Blog section 是静态数据。如需集成动态博客系统：
- 使用 Markdown 文件 + `gray-matter` 解析前置元数据
- 使用 CMS 无头系统（如 Contentful、Sanity）
- 或集成 GitHub Issues 作为博客后端

## 部署

### Vercel（推荐）
推送代码到 GitHub 后，在 Vercel 导入项目即可自动部署。

### GitHub Pages
1. 安装 `gh-pages`：`npm install -D gh-pages`
2. 在 `package.json` 添加 `homepage` 字段和 `deploy` 脚本
3. 运行 `npm run deploy`

### 自托管
运行 `npm run build` 后，将 `dist/` 目录部署到任意静态文件服务器（Nginx、Apache 等）。

## 技术决策笔记

- **为何不用 UI 框架**：保持轻量，完全自定义设计，避免样式覆盖冲突
- **为何不用 TypeScript**：项目规模较小，React 19 已提供足够类型提示支持
- **为何不用路由**：单页作品集无需多页面，锚点导航已足够
- **CSS 而非 CSS-in-JS**：纯 CSS 更直观，CSS 变量提供足够主题定制能力
