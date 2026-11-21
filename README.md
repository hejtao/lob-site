# Lob

Lob 的落地页。用 iPhone 上已有的语音输入说话，Lob 把文字打进 Mac 上当前聚焦的 AI 应用。

iPhone 和 Mac 两端都要安装才能使用。

## 环境

- Node.js 22.12 或更高版本
- Yarn 4。项目使用 `nodeLinker: node-modules`，依赖安装在 `node_modules`

## 本地开发

```bash
corepack enable
yarn install
yarn dev
```

开发服务器地址是 [http://localhost:4321](http://localhost:4321)。

## 脚本

| 命令 | 作用 |
| --- | --- |
| `yarn dev` | 启动开发服务器 |
| `yarn build` | 构建静态站点到 `dist/` |
| `yarn preview` | 预览构建结果 |

## 页面

首页由四块组成：

- Hero：产品介绍和主图
- About：产品说明
- Features：六条功能说明
- Download：iOS 二维码、Mac 下载按钮和版权信息

页头的 About、Features、Download 分别跳到 `#about`、`#features` 和 `#download`。

## 下载地址

iOS 和 Mac 的下载地址在 `src/components/download.astro`。二维码在构建时根据 iOS 地址生成。

iOS 仍是占位：`https://apps.apple.com`。换成真实的 App Store 链接后，重新构建即可。

Mac 安装包是 `public/downloads/Lob-1.0.1-macOS-universal.zip`，下载按钮指向这个文件。

## 发布

站点发布在 [https://hejtao.github.io/lob-site/](https://hejtao.github.io/lob-site/)。推送到 `main` 后，GitHub Actions 会自动构建并发布。
