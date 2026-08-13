import type { ReactNode } from "react";
import type { PageBannerProps } from "@components/page_banner/types";

export type NewsCategory = {
  id: string;
  slug: string;
  label: ReactNode;
};

export type NewsArticleItem = {
  id: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: NewsCategory;
  publishedAt: string;
  formattedDate: string;
  title: ReactNode;
  excerpt: ReactNode;
  href: string;
};

export type FeaturedNewsArticle = NewsArticleItem & {
  featured: boolean;
};

export type OfficialUpdateType = "communique" | "announcement" | "notice";

export type OfficialUpdateItem = {
  id: string;
  slug: string;
  type: OfficialUpdateType;
  publishedAt: string;
  formattedDate: string;
  title: ReactNode;
  excerpt: ReactNode;
  href: string;
};

export type NewsArchiveCategory = {
  id: string;
  slug: string;
  label: ReactNode;
};

export type NewsArchiveYear = {
  id: string;
  value: number;
  label: ReactNode;
};

export type NewsPageData = {
  banner: PageBannerProps;

  featured: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    article: FeaturedNewsArticle;
  };

  latest: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    actionHref: string;
    items: NewsArticleItem[];
  };

  officialUpdates: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    actionHref: string;
    items: OfficialUpdateItem[];
  };

  communityCulture: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    actionHref: string;
    items: NewsArticleItem[];
  };

  projectsDevelopment: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    actionHref: string;
    items: NewsArticleItem[];
  };

  archive: {
    id: string;
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    actionLabel: ReactNode;
    actionHref: string;
    categories: NewsArchiveCategory[];
    years: NewsArchiveYear[];
  };
};