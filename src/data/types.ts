export type Locale = 'ja' | 'en';

export type LocalizedText = {
  ja: string;
  en?: string;
};

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
  certificateImage?: 'yans' | 'ipsj';
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

export type StudyArticle = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  pdfPath: string;
};
