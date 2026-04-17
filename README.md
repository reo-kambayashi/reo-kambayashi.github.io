# 研究者プロフィールサイト

Astro で作った研究者向けの静的サイトです。日本語を既定表示にしつつ、英語版を `/en/` に分けて公開できます。

## セットアップ

1. Node.js 18 以上を用意します。
2. 依存関係をインストールします。

   ```bash
   npm install
   ```

3. 開発サーバを起動します。

   ```bash
   npm run dev
   ```

   既定では `http://localhost:4321` で確認できます。

## 主な編集ポイント

- [`src/data/profile.ts`](./src/data/profile.ts)
  プロフィール本文、発表、受賞、経歴、連絡先、日英文言を管理します。
- [`src/pages/index.astro`](./src/pages/index.astro)
  日本語版 `/` のページ構成を管理します。
- [`src/pages/en/index.astro`](./src/pages/en/index.astro)
  英語版 `/en/` のページ構成を管理します。
- [`src/layouts/SiteLayout.astro`](./src/layouts/SiteLayout.astro)
  全体レイアウト、ページ内ナビゲーション、言語切替 UI を管理します。
- [`src/components/sections/`](./src/components/sections/)
  各セクションの見た目と locale ごとの表示ロジックを管理します。
- [`src/data/studyArticles.ts`](./src/data/studyArticles.ts)
  競技プログラミング勉強ノートの記事メタデータを管理します。
- [`src/pages/study/competitive-programming/`](./src/pages/study/competitive-programming/)
  `/study/competitive-programming/` 一覧ページと、`[slug].astro` による記事個別ページの動的生成を行います。
- [`public/study/competitive-programming/pdfs/`](./public/study/competitive-programming/pdfs/)
  各記事の PDF ファイル（スライド）の配置先です。

## 現在の構成

- `HeroSection`
  氏名、所属、研究分野を表示する導入部です。
- `AboutSection`
  プロフィール文と所属研究グループを表示します。
- `PublicationsSection`
  研究発表一覧と関連リンクを表示します。
- `AwardsSection`
  受賞情報と賞状画像を表示します。
- `EducationSection`
  経歴を縦タイムラインで表示します。
- `ContactSection`
  メールと X の連絡先を表示します。

## 多言語データの扱い

- 表示文言は `LocalizedText = { ja: string; en?: string }` で管理します。
- 英語版では `en` があればそれを使い、なければ `ja` を表示します。
- 発表名や受賞名のように日本語のまま見せたい項目は、`en` を省略してください。
- 共有 UI 文言やメタ情報も `src/data/profile.ts` に集約しています。

## データ構造のメモ

- `siteMeta`
  ページタイトルと説明文の日英テキストです。
- `profileSummary`
  ヒーロー領域の基本情報です。
- `about`
  プロフィール本文と所属研究グループ情報です。
- `publications`
  タイトル、著者、会議名、発表形式、外部リンクを持ちます。
- `awards`
  受賞名、対象発表、受賞結果、賞状画像を持ちます。
- `educationHistory`
  `period` と `description` で経歴を管理します。
- `contacts`
  表示ラベル、値、リンク先、アイコン種別を管理します。

## 勉強ノートの追加方法

1. PDF を [`public/study/competitive-programming/pdfs/`](./public/study/competitive-programming/pdfs/) に `<slug>.pdf` として置きます。
2. [`src/data/studyArticles.ts`](./src/data/studyArticles.ts) の `studyArticles` 配列にエントリを追加します。

   ```ts
   {
     slug: 'segment-tree',
     title: 'セグメント木を理解する',
     publishedAt: '2026-04-20',
     description: '区間クエリの基本データ構造を AI と対話して理解した記録。',
     tags: ['データ構造'],
     pdfPath: '/study/competitive-programming/pdfs/segment-tree.pdf',
   }
   ```

3. `npm run dev` で `/study/competitive-programming/<slug>/` にアクセスし、PDF が埋め込み表示されることを確認します。

## ビルド / プレビュー

```bash
npm run build
npm run preview
```

## デザイン方針

- 白と青を基調にし、グラデーション・影・過剰な装飾は使わない
- 情報は短く静かに見せ、研究者サイトらしい読みやすさを優先する
- 日本語版を基準にしつつ、英語版でも同じ情報構造を保つ

## デプロイ

生成される `dist/` を GitHub Pages、Netlify、Vercel など任意の静的ホスティングに配置してください。GitHub Pages では `/` が日本語版、`/en/` が英語版として配信されます。
