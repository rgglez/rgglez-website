export type PortfolioRepo = {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  archived: boolean;
  pushedAt: string;
};

export type PortfolioData = {
  generatedAt: string;
  source: string;
  languages: string[];
  topics: string[];
  repos: PortfolioRepo[];
};
