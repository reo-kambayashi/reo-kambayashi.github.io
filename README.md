# 研究者プロフィールサイト

Astro で作った研究者向けの単一ページサイトです。現在は `プロフィール / 研究・業績 / 経歴 / 連絡先` の4セクション構成で、白と青を基調にした静かなトーンへ調整しています。

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
  氏名、所属、研究分野、プロフィール文、発表、経歴、連絡先を編集します。
- [`src/pages/index.astro`](./src/pages/index.astro)
  セクションの並び順と読み込むコンポーネントを管理します。
- [`src/layouts/SiteLayout.astro`](./src/layouts/SiteLayout.astro)
  全体レイアウト、配色、共通タイポグラフィ、ページ内ナビゲーションを管理します。
- [`src/components/sections/`](./src/components/sections/)
  各セクションの見た目と表示ロジックを管理します。

## 現在の構成

- `HeroSection`
  氏名、所属、研究分野をコンパクトに見せる導入部です。
- `AboutSection`
  プロフィール文を表示します。
- `PublicationsSection`
  発表一覧と補足情報を表示します。
- `EducationSection`
  経歴を縦タイムラインで表示します。
- `ContactSection`
  メールと X の連絡先を表示します。

## データ構造のメモ

- `profileSummary`
  名前とヒーロー領域の基本情報です。
- `about`
  プロフィール本文と所属研究室リンクです。
- `publications`
  タイトル、著者、会議名、発表形式、補足メモ、外部リンクを持ちます。
- `educationHistory`
  `period` と `description` で経歴を管理します。
- `contacts`
  表示ラベル、値、リンク先、アイコン種別を管理します。

## ビルド / プレビュー

```bash
npm run build
npm run preview
```

## デザイン方針

- 白と青を基調にし、グラデーション・影・過剰な装飾は使わない
- 情報は短く静かに見せ、研究者サイトらしい読みやすさを優先する
- 英語UIは避け、日本語中心で統一する

## デプロイ

生成される `dist/` を GitHub Pages、Netlify、Vercel など任意の静的ホスティングに配置してください。
