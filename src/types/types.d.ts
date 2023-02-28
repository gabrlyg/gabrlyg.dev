export interface Social {
  instagram: string;
  twitter: string;
  github: string;
}

export type SocialType = 'instagram' | 'twitter' | 'github';

export interface SiteConfig {
  title: string;
  social: Social;
}
