# 任務：安裝 Whitepaper 模組到 twin3_home

## 背景

我們已經將白皮書（Whitepaper）獨立成一個 Next.js 模組，放在：
**https://github.com/cis2042/whitepaper**

你需要把它整合到 `twin3_home` 首頁專案中。

## 詳細的整合指南

請先閱讀 whitepaper repo 裡的 `INTEGRATION.md`：
https://github.com/cis2042/whitepaper/blob/feat/home-integration/INTEGRATION.md

## 你要做的事

### 1. 安裝模組

在 `twin3_home` 根目錄執行：

```bash
git submodule add https://github.com/cis2042/whitepaper.git whitepaper
cd whitepaper
npm install
```

### 2. 在首頁 nav 加上 Whitepaper 連結

在 `index.html` 的 `<ul class="nav-links">` 中，Dashboard 後面加上：

```html
<li><a href="/whitepaper">Whitepaper</a></li>
```

### 3. 設定部署路由

whitepaper 是一個獨立的 Next.js 服務。你有兩個選擇：

**選項 A — Subdirectory**（推薦）：
- 在 `whitepaper/next.config.ts` 設定 `basePath: '/whitepaper'`
- 在 Cloud Run / 反向代理設定 `/whitepaper/*` 路由到 whitepaper 服務

**選項 B — Subdomain**：
- 部署到 `whitepaper.twin3.ai`
- nav link 改成 `<a href="https://whitepaper.twin3.ai">`

### 4. 確保風格一致

whitepaper 使用 CSS custom properties，你可以在 `style.css` 中覆蓋任何變數來統一視覺風格：

```css
:root {
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --green-deep: #1a3a24;
  --cream: #fafaf5;
  --gold-warm: #d4c89a;
}
```

## 你的權限

**你擁有最高權限，可以自由修改 whitepaper 模組中的任何內容**，包括但不限於：
- 頁面文字、結構、順序
- 導航邏輯、sidebar 結構
- 主題色、字型、動畫效果
- 組件行為、CSS 樣式

以符合 twin3.ai 首頁原本的設計風格與讀者的閱讀習慣為最高原則。

## Whitepaper 結構概覽

```
whitepaper/
├── src/app/          # 16 個章節頁面
│   ├── page.tsx       # Executive Summary
│   ├── paradigm-shift/
│   ├── human-intelligence/
│   ├── algorithm/
│   ├── agent-economy/
│   ├── tokenomics/
│   └── ... (共 16 章)
├── src/components/   # 共用組件
│   ├── Navigation.tsx  # 導航（可自由修改）
│   ├── MatrixGrid.tsx  # 16×16 hex 矩陣動效
│   └── ThemeProvider.tsx # Dark/Cream 切換
├── INTEGRATION.md    # 完整整合文件
└── package.json
```

## 驗收標準

- [ ] `twin3.ai/whitepaper` 可正常訪問
- [ ] 首頁 nav 有 Whitepaper 連結
- [ ] 視覺風格與首頁一致（或已按需調整）
- [ ] Dark/Cream 主題切換正常
- [ ] 所有 16 個章節頁面可正常渲染
