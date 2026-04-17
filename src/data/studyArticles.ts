import type { StudyArticle } from './types';

export const studyArticles: StudyArticle[] = [
  {
    slug: 'segtree-bit',
    title: 'セグメント木とBITを理解する',
    publishedAt: '2026-04-17',
    description:
      '区間クエリの基本データ構造であるセグメント木とBITを、AIと対話しながら理解した記録。',
    tags: ['データ構造', 'セグメント木', 'BIT', '区間クエリ'],
    pdfPath: '/study/competitive-programming/pdfs/segtree-bit-slides.pdf',
  },
];

export const studyPageContent = {
  categoryTitle: '競技プログラミング勉強ノート',
  categoryLead:
    'AI と壁打ちしながら、自分が理解できるまで作り込んだ学習スライドをまとめています。',
  siteTitle: '競技プログラミング勉強ノート | Reo Kambayashi',
  siteDescription:
    'AI と対話して理解するまで作り込んだ競技プログラミングの学習スライドを公開しています。',
  empty: '記事は準備中です。',
  publishedLabel: '公開日',
  tagsLabel: 'タグ',
  backToList: '一覧に戻る',
  backToProfile: 'プロフィールへ戻る',
  downloadLabel: 'PDF をダウンロード',
  openInNewTab: '別タブで開く',
  notFoundTitle: '記事が見つかりません',
};

export const resolveAssetPath = (basePath: string, assetPath: string) => {
  const trimmedBase = basePath.replace(/\/$/, '');
  const normalizedAsset = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${trimmedBase}${normalizedAsset}`;
};

export const formatPublishedDate = (value: string) => {
  const [year, month, day] = value.split('-');
  if (!year || !month || !day) {
    return value;
  }
  return `${year}年${Number(month)}月${Number(day)}日`;
};
