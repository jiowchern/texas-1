# 線上德州撲克遊戲 (Online Texas Hold'em Poker)

這是一個即時多人德州撲克遊戲，使用 TypeScript 和 Node.js 開發。

## 專案結構

```
texas-holdem-poker/
├── frontend/                 # 前端 TypeScript 專案
│   ├── src/
│   │   ├── components/      # UI 組件
│   │   ├── services/        # 服務類別 (WebSocket 客戶端等)
│   │   ├── types/           # TypeScript 類型定義
│   │   └── main.ts          # 前端入口點
│   ├── index.html           # HTML 模板
│   ├── package.json         # 前端依賴項
│   ├── tsconfig.json        # TypeScript 配置
│   └── vite.config.ts       # Vite 構建配置
├── backend/                  # 後端 Node.js 專案
│   ├── src/
│   │   ├── managers/        # 管理器類別 (遊戲管理器、大廳管理器等)
│   │   ├── models/          # 數據模型 (玩家、桌子等)
│   │   ├── game/            # 遊戲邏輯 (撲克引擎、牌組等)
│   │   └── index.ts         # 後端入口點
│   ├── package.json         # 後端依賴項
│   └── tsconfig.json        # TypeScript 配置
└── package.json             # 根目錄工作區配置
```

## 開發指令

### 安裝依賴項
```bash
npm run install:all
```

### 開發模式
```bash
# 啟動前端開發服務器
npm run dev:frontend

# 啟動後端開發服務器
npm run dev:backend
```

### 構建專案
```bash
# 構建前端
npm run build:frontend

# 構建後端
npm run build:backend

# 構建全部
npm run build:all
```

### 類型檢查
```bash
npm run type-check:all
```

## 技術棧

- **前端**: TypeScript, Vite, Socket.IO Client
- **後端**: Node.js, Express, Socket.IO, TypeScript
- **開發工具**: Vite (前端構建), ts-node-dev (後端開發)