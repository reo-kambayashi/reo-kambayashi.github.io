export type Award = {
  title: string;
  detail?: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
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
  href: string;
  newTab: boolean;
  icon?: ContactIconKey;
};

export const profileSummary = {
  name: '神林 励旺',
  affiliation: '所属: 東北大学 工学部 電気情報物理工学科（学部4年）',
  researchArea: '研究分野: 自然言語処理',
};

export const about = {
  description: '東北大学工学部電気情報物理工学科の学部4年生です。',
  group: {
    name: 'Tohoku NLP Group',
    href: 'https://www.nlp.ecei.tohoku.ac.jp/',
  },
};

export const awards: Award[] = [
  {
    title: '第20回言語処理若手シンポジウム(YANS2025) 奨励賞',
    detail: '24/246 9.76%',
  },
];

export const publications: Publication[] = [
  {
    title: '「マルチモーダルLLMのモダリティ間共有表現の解明」',
    authors: ['神林 励旺', '稲葉 達郎', 'Heinzerling Benjamin', '坂口 慶祐', '磯沼 大'],
    venue: '第20回言語処理若手シンポジウム(YANS2025), 2025',
  },
];

export const educationHistory: Education[] = [
  {
    period: '2022年4月 - 現在',
    description: '東北大学 工学部 電気情報物理工学科 学士課程',
  },
  {
    period: '2019年4月 - 2022年3月',
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
  },
  {
    label: 'X',
    value: 'https://x.com/Kambayashi_NLP',
    href: 'https://x.com/Kambayashi_NLP',
    newTab: true,
    icon: 'x',
  },
];
