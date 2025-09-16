# 研究者用HP（Astro 単一ページ最小構成）

Astroで作った“1ファイルだけ”の研究者向けHPです。編集は `src/pages/index.astro` のみで完結します。

## セットアップ

1. Node.js 18以上を用意します。
2. 依存関係をインストール:
   ```bash
   npm install
   ```
3. 開発サーバを起動:
   ```bash
   npm run dev
   ```
   既定では http://localhost:4321 でアクセスできます。

## 編集ポイント（この1箇所だけ）

- `src/pages/index.astro`: 冒頭の `name`, `affiliation`, `researchAreas`, `publications` を編集。

## ディレクトリ構成（最小）

- `package.json`
- `astro.config.mjs`
- `src/pages/index.astro`
- `.gitignore`
- `README.md`

任意で `public/cv.pdf` を置くとCVリンクが有効になります。

## ビルド/プレビュー

```bash
npm run build
npm run preview
```

## デプロイ

### GitHub Pages

1. GitHub 上にリポジトリを作成し、このプロジェクトを `main` ブランチへプッシュします。
2. `Settings > Pages` で **Build and deployment** を「GitHub Actions」に変更します。
3. `main` ブランチへコミットすると `.github/workflows/deploy.yml` が自動で実行され、`dist/` が Pages に公開されます。
4. プロジェクトページ（`https://<ユーザー名>.github.io/<リポジトリ名>/`）で公開する場合は、アクション内で自動設定される `base`/`site` を利用できるため追加設定は不要です。ユーザー/オーガニゼーションページ（`<ユーザー名>.github.io`）も同様に対応済みです。

### その他のホスティング

生成される `dist/` を任意の静的ホスティング（Netlify, Vercel など）へ配置してください。
