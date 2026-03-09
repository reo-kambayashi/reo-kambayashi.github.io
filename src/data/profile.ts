export type Locale = 'ja' | 'en';

export type LocalizedText = {
  ja: string;
  en?: string;
};

export const resolveLocalizedText = (text: LocalizedText, locale: Locale) =>
  locale === 'en' ? text.en ?? text.ja : text.ja;

export type PublicationLink = {
  label: LocalizedText;
  href: string;
};

export type Publication = {
  title: LocalizedText;
  authors: string[];
  venue: LocalizedText;
  type?: LocalizedText;
  note?: LocalizedText;
  links?: PublicationLink[];
};

export type Award = {
  title: LocalizedText;
  targetTitle?: LocalizedText;
  result?: LocalizedText;
  certificateImage?: 'yans';
  certificateAlt?: LocalizedText;
};

export type Education = {
  period: LocalizedText;
  description: LocalizedText;
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
  label: LocalizedText;
  value: string;
  displayValue?: string;
  href: string;
  newTab: boolean;
  icon?: ContactIconKey;
  showLabel?: boolean;
};

export type SectionLink = {
  href: `#${string}`;
  label: LocalizedText;
};

export type SiteMeta = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ProfileSummary = {
  name: LocalizedText;
  selfName: string;
  heroKicker: LocalizedText;
  heroMarkLabel: LocalizedText;
  heroLogoAlt: LocalizedText;
  affiliationLabel: LocalizedText;
  affiliationValue: LocalizedText;
  researchAreaLabel: LocalizedText;
  researchAreaValue: LocalizedText;
  basicInfoLabel: LocalizedText;
};

export type About = {
  heading: LocalizedText;
  description: LocalizedText;
  membershipPrefix: LocalizedText;
  membershipSuffix: LocalizedText;
  group: {
    name: string;
    href: string;
  };
};

export const siteMeta: SiteMeta = {
  title: {
    ja: '神林励旺 | 研究者プロフィール',
    en: 'Reo Kambayashi | Research Profile',
  },
  description: {
    ja: '神林励旺の研究テーマ、発表、経歴、連絡先をまとめた研究者プロフィールページ',
    en: "Research profile page summarizing Reo Kambayashi's research interests, presentations, background, and contact information",
  },
};

export const layoutContent = {
  navAriaLabel: {
    ja: 'ページ内ナビゲーション',
    en: 'Page navigation',
  },
  languageSwitcherLabel: {
    ja: '言語切替',
    en: 'Language switcher',
  },
  japaneseLabel: {
    ja: '日本語',
    en: '日本語',
  },
  englishLabel: {
    ja: 'English',
    en: 'English',
  },
};

export const sectionLinks: SectionLink[] = [
  { href: '#about', label: { ja: 'プロフィール', en: 'Profile' } },
  { href: '#research', label: { ja: '研究発表', en: 'Presentations' } },
  { href: '#awards', label: { ja: '受賞', en: 'Awards' } },
  { href: '#education', label: { ja: '経歴', en: 'Education' } },
  { href: '#contact', label: { ja: '連絡先', en: 'Contact' } },
];

export const profileSummary: ProfileSummary = {
  name: {
    ja: '神林励旺',
    en: 'Reo Kambayashi',
  },
  selfName: '神林 励旺',
  heroKicker: {
    ja: 'プロフィール',
    en: 'Profile',
  },
  heroMarkLabel: {
    ja: '坂口・乾研究室',
    en: 'Natural Language Processing Laboratory',
  },
  heroLogoAlt: {
    ja: 'Tohoku NLP Group',
    en: 'Tohoku NLP Group',
  },
  affiliationLabel: {
    ja: '所属',
    en: 'Affiliation',
  },
  affiliationValue: {
    ja: '東北大学工学部電気情報物理工学科 学部4年',
    en: 'Fourth-year undergraduate student, Department of Electrical, Information and Physics Engineering, School of Engineering, Tohoku University',
  },
  researchAreaLabel: {
    ja: '研究分野',
    en: 'Research Area',
  },
  researchAreaValue: {
    ja: '自然言語処理',
    en: 'Natural Language Processing',
  },
  basicInfoLabel: {
    ja: '基本情報',
    en: 'Basic information',
  },
};

export const about: About = {
  heading: {
    ja: 'プロフィール',
    en: 'Profile',
  },
  description: {
    ja: '東北大学工学部電気情報物理工学科の学部4年です。',
    en: 'I am a fourth-year undergraduate student in the Department of Electrical, Information and Physics Engineering, School of Engineering, Tohoku University.',
  },
  membershipPrefix: {
    ja: '',
    en: 'I am a member of ',
  },
  membershipSuffix: {
    ja: 'に所属しています。',
    en: '.',
  },
  group: {
    name: 'Tohoku NLP Group',
    href: 'https://www.nlp.ecei.tohoku.ac.jp/',
  },
};

export const publicationSectionContent = {
  heading: {
    ja: '研究発表',
    en: 'Presentations',
  },
  empty: {
    ja: '発表情報は現在準備中です。',
    en: 'Presentation information is currently being prepared.',
  },
  linksLabel: {
    ja: '関連リンク',
    en: 'Related links',
  },
  authorSeparator: {
    ja: '、',
    en: ', ',
  },
};

export const publications: Publication[] = [
  {
    title: {
      ja: '画像生成学習が視覚理解能力へ与える影響の分析',
    },
    authors: ['神林 励旺', '稲葉 達郎', 'Benjamin Heinzerling', '坂口 慶祐', '乾 健太郎', '磯沼 大'],
    venue: {
      ja: '言語処理学会第32回年次大会（NLP 2026） / C3-12',
      en: 'The Thirty-second Annual Meeting of the Association for Natural Language Processing (NLP2026) / C3-12',
    },
    type: {
      ja: 'ポスター発表',
      en: 'Poster presentation',
    },
    links: [
      {
        label: {
          ja: '大会プログラム',
          en: 'Conference program',
        },
        href: 'https://www.anlp.jp/proceedings/annual_meeting/2026/#C3',
      },
    ],
  },
  {
    title: {
      ja: 'マルチモーダルLLMのモダリティ間共有表現の解明',
    },
    authors: ['神林 励旺', '稲葉 達郎', 'Benjamin Heinzerling', '坂口 慶祐', '磯沼 大'],
    venue: {
      ja: '第20回言語処理若手シンポジウム（YANS 2025）',
    },
    type: {
      ja: 'ポスター発表',
      en: 'Poster presentation',
    },
  },
];

export const awardSectionContent = {
  heading: {
    ja: '受賞',
    en: 'Awards',
  },
  targetLabel: {
    ja: '対象発表',
    en: 'Presentation',
  },
  empty: {
    ja: '受賞情報は現在準備中です。',
    en: 'Award information is currently being prepared.',
  },
  defaultCertificateAlt: {
    ja: '受賞賞状',
    en: 'Award certificate',
  },
};

export const awards: Award[] = [
  {
    title: {
      ja: '第20回言語処理若手シンポジウム（YANS 2025）奨励賞',
    },
    targetTitle: {
      ja: 'マルチモーダルLLMのモダリティ間共有表現の解明',
    },
    result: {
      ja: '対象246件中24件（受賞率9.76%）',
      en: '24 out of 246 presentations (award rate: 9.76%)',
    },
    certificateImage: 'yans',
    certificateAlt: {
      ja: 'YANS 2025 奨励賞の賞状',
    },
  },
];

export const educationSectionContent = {
  heading: {
    ja: '経歴',
    en: 'Education',
  },
};

export const educationHistory: Education[] = [
  {
    period: {
      ja: '2022年4月-現在',
      en: 'Apr 2022-Present',
    },
    description: {
      ja: '東北大学 工学部 電気情報物理工学科 学士課程',
      en: 'Undergraduate Program, Department of Electrical, Information and Physics Engineering, School of Engineering, Tohoku University',
    },
  },
  {
    period: {
      ja: '2019年4月-2022年3月',
      en: 'Apr 2019-Mar 2022',
    },
    description: {
      ja: '長野県長野高等学校',
      en: 'Nagano Prefecture Nagano Senior High School',
    },
  },
];

export const contactSectionContent = {
  heading: {
    ja: '連絡先',
    en: 'Contact',
  },
};

export const contacts: Contact[] = [
  {
    label: {
      ja: 'メール',
      en: 'Email',
    },
    value: 'kambayashi.reo.t6@dc.tohoku.ac.jp',
    href: 'mailto:kambayashi.reo.t6@dc.tohoku.ac.jp',
    newTab: false,
    icon: 'mail',
    showLabel: false,
  },
  {
    label: {
      ja: 'X',
      en: 'X',
    },
    value: 'https://x.com/Kambayashi_NLP',
    displayValue: '@Kambayashi_NLP',
    href: 'https://x.com/Kambayashi_NLP',
    newTab: true,
    icon: 'x',
    showLabel: false,
  },
];
