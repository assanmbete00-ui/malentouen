import {
  NEWS_BANNER,
  NEWS_COMMUNITY_CULTURE,
  NEWS_FEATURED,
  NEWS_LATEST,
  NEWS_OFFICIAL_UPDATES,
  NEWS_PROJECTS_DEVELOPMENT,
} from "../config";

export type NewsArticleSource = {
  id: string;
  slug: string;
  image: string;
  imageAltKey: string;
  category: {
    id: string;
    slug: string;
    labelKey: string;
  };
  publishedAt: string;
  titleKey: string;
  excerptKey: string;
  href: string;
};

export const NEWS_ARTICLES: NewsArticleSource[] = [
  NEWS_FEATURED.article,
  ...NEWS_LATEST.items,
  ...NEWS_COMMUNITY_CULTURE.items,
  ...NEWS_PROJECTS_DEVELOPMENT.items,
  ...NEWS_OFFICIAL_UPDATES.items.map((item) => ({
    id: item.id,
    slug: item.slug,
    image: NEWS_BANNER.image,
    imageAltKey: NEWS_BANNER.imageAltKey,
    category: {
      id: "institutional",
      slug: "institutional",
      labelKey: "NEWS_CATEGORY_INSTITUTIONAL",
    },
    publishedAt: item.publishedAt,
    titleKey: item.titleKey,
    excerptKey: item.excerptKey,
    href: item.href,
  })),
];

export function getNewsArticleBySlug(
  slug: string,
): NewsArticleSource | undefined {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}
