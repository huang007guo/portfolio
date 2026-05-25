# Personal Portfolio & Blog

一个现代化的个人博客介绍页，使用 React + Vite 构建。

## 功能特性

- 🎨 现代化设计，响应式布局
- 📱 移动端友好，自适应各种屏幕
- ⚡ 快速加载（Vite 构建）
- 🎯 包含以下部分：
  - Hero - 个人介绍首页
  - About - 关于我（技能、经验）
  - Projects - 项目展示
  - Blog - 博客文章列表
  - Contact - 联系表单

## 技术栈

- React 18
- Vite
- CSS3 (原生 CSS 变量)
- 无额外 UI 框架依赖

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看效果。

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 自定义内容

### 1. 修改个人信息

编辑以下文件来更新个人信息：

- **Hero.jsx** - 修改首页的名字、标题和介绍
- **About.jsx** - 修改关于我的描述、技能列表、统计数据
- **Projects.jsx** - 修改项目展示内容
- **Blog.jsx** - 修改博客文章列表
- **Contact.jsx** - 修改联系信息和社交媒体链接

### 2. 修改颜色主题

编辑 `src/App.css` 文件中的 CSS 变量：

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

### 3. 添加个人照片

在 `Hero.jsx` 中，将 `.hero-image-placeholder` 替换为你的照片：

```jsx
<div className="hero-image">
  <img src="/path/to/your/photo.jpg" alt="Your Name" />
</div>
```

### 4. 添加项目截图

在 `Projects.jsx` 中，将 `.project-image` 替换为项目截图：

```jsx
<div className="project-image">
  <img src={project.screenshot} alt={project.title} />
</div>
```

## 项目结构

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # 导航栏
│   │   ├── Hero.jsx          # 首页大图
│   │   ├── About.jsx         # 关于我
│   │   ├── Projects.jsx      # 项目展示
│   │   ├── Blog.jsx          # 博客文章
│   │   ├── Contact.jsx       # 联系我
│   │   └── *.css             # 对应样式文件
│   ├── App.jsx               # 主应用组件
│   ├── App.css               # 全局样式
│   └── main.jsx              # 入口文件
├── index.html                 # HTML 模板
├── package.json               # 项目配置
└── vite.config.js            # Vite 配置
```

## 部署

### 构建

```bash
npm run build
```

构建后的文件在 `dist/` 目录下。

### 部署到 Vercel

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署

### 部署到 GitHub Pages

1. 安装 `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```

2. 在 `package.json` 添加:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. 部署:
   ```bash
   npm run deploy
   ```

## 下一步

- [x] 添加真实的个人照片
- [x] 添加真实的项目截图和链接
- [x] 集成真实的博客系统（如 Markdown 渲染）
- [ ] 添加动画效果（如 Framer Motion）
- [ ] 添加深色模式切换
- [ ] 集成联系表单后端（如 Formspree、EmailJS）

## 许可证

MIT

---

**祝你的个人博客早日上线！** 🚀
