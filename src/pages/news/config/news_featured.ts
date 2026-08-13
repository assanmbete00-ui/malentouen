import NEWS_FEATURED_IMAGE from "@assets/images/news/featured/featured.png";

export const NEWS_FEATURED = {
  id: "featured-news",

  eyebrowKey: "NEWS_FEATURED_EYEBROW",
  titleKey: "NEWS_FEATURED_TITLE",
  descriptionKey: "NEWS_FEATURED_DESCRIPTION",
  actionLabelKey: "NEWS_FEATURED_ARTICLE_ACTION",

  article: {
    id: "news-featured-01",
    slug: "heritage-community-malantouen",

    image: NEWS_FEATURED_IMAGE,
    imageAltKey: "NEWS_FEATURED_ARTICLE_IMAGE_ALT",

    category: {
      id: "institutional",
      slug: "institutional",
      labelKey: "NEWS_CATEGORY_INSTITUTIONAL",
    },

    publishedAt: "2026-08-13",
    featured: true,

    titleKey: "NEWS_FEATURED_ARTICLE_TITLE",
    excerptKey: "NEWS_FEATURED_ARTICLE_EXCERPT",

    href: "/news/heritage-community-malantouen",
  },
} as const;