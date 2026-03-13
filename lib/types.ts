export type FormatItem = {
  icon: string;
  title: string;
  description: string;
};

export type PackageItem = {
  icon: string;
  title: string;
  description: string;
};

export type Highlight = {
  icon: string;
  title: string;
  subtitle: string;
};

export type Tournament = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  locationDetail: string;
  dates: string;
  year: number;
  season: string;
  description: string;
  heroImage: string;
  format: FormatItem[];
  basicPackage: PackageItem[];
  premiumPackage: PackageItem[];
  highlights: Highlight[];
};
