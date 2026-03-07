export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  type?: string;
  note?: string;
  links?: PublicationLink[];
};

export type Award = {
  title: string;
  targetTitle?: string;
  result?: string;
  certificateImage?: 'yans';
  certificateAlt?: string;
};

export type Education = {
  period: string;
  description: string;
};

export type ContactIcon = {
  type: 'stroke' | 'fill';
  d: string;
  strokeWidth?: number;
};

export type ContactIconKey = 'mail' | 'x';

export const contactIcons: Record<ContactIconKey, ContactIcon> = {
  mail: {
    type: 'stroke',
    d: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
    strokeWidth: 1.5,
  },
  x: {
    type: 'fill',
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
};

export type Contact = {
  label: string;
  value: string;
  displayValue?: string;
  href: string;
  newTab: boolean;
  icon?: ContactIconKey;
  showLabel?: boolean;
};

export type SectionLink = {
  href: `#${string}`;
  label: string;
};

export const siteMeta = {
  title: '神林励旺 | 研究者プロフィール',
  description: '神林励旺の研究テーマ、発表、経歴、連絡先をまとめた研究者プロフィールページ',
};

export const sectionLinks: SectionLink[] = [
  { href: '#about', label: 'プロフィール' },
  { href: '#research', label: '研究発表' },
  { href: '#awards', label: '受賞' },
  { href: '#education', label: '経歴' },
  { href: '#contact', label: '連絡先' },
];

export const profileSummary = {
  name: '神林 励旺',
  selfName: '神林 励旺',
  affiliationLabel: '所属',
  affiliationValue: '東北大学工学部電気情報物理工学科 学部4年',
  researchAreaLabel: '研究分野',
  researchAreaValue: '自然言語処理',
};

export const about = {
  description: '東北大学工学部電気情報物理工学科の学部4年です。',
  group: {
    name: 'Tohoku NLP Group',
    href: 'https://www.nlp.ecei.tohoku.ac.jp/',
  },
};

export const publications: Publication[] = [
  {
    title: '画像生成学習が視覚理解能力へ与える影響の分析',
    authors: ['神林 励旺', '稲葉 達郎', 'Benjamin Heinzerling', '坂口 慶祐', '乾 健太郎', '磯沼 大'],
    venue: '言語処理学会第32回年次大会（NLP 2026） / C3-12',
    type: 'ポスター発表',
    links: [
      {
        label: '大会プログラム',
        href: 'https://www.anlp.jp/proceedings/annual_meeting/2026/#C3',
      },
    ],
  },
  {
    title: 'マルチモーダルLLMのモダリティ間共有表現の解明',
    authors: ['神林 励旺', '稲葉 達郎', 'Benjamin Heinzerling', '坂口 慶祐', '磯沼 大'],
    venue: '第20回言語処理若手シンポジウム（YANS 2025）',
    type: 'ポスター発表',
  },
];

export const awards: Award[] = [
  {
    title: '第20回言語処理若手シンポジウム（YANS 2025）奨励賞',
    targetTitle: 'マルチモーダルLLMのモダリティ間共有表現の解明',
    result: '対象246件中24件（受賞率9.76%）',
    certificateImage: 'yans',
    certificateAlt: 'YANS 2025 奨励賞の賞状',
  },
];

export const educationHistory: Education[] = [
  {
    period: '2022年4月–現在',
    description: '東北大学 工学部 電気情報物理工学科 学士課程',
  },
  {
    period: '2019年4月–2022年3月',
    description: '長野県長野高等学校',
  },
];

export const contacts: Contact[] = [
  {
    label: 'メール',
    value: 'kambayashi.reo.t6@dc.tohoku.ac.jp',
    href: 'mailto:kambayashi.reo.t6@dc.tohoku.ac.jp',
    newTab: false,
    icon: 'mail',
    showLabel: false,
  },
  {
    label: 'X',
    value: 'https://x.com/Kambayashi_NLP',
    displayValue: '@Kambayashi_NLP',
    href: 'https://x.com/Kambayashi_NLP',
    newTab: true,
    icon: 'x',
    showLabel: false,
  },
];
