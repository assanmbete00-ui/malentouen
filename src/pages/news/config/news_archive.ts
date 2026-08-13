export const NEWS_ARCHIVE = {
  id: "news-archive",

  eyebrowKey: "NEWS_ARCHIVE_EYEBROW",
  titleKey: "NEWS_ARCHIVE_TITLE",
  descriptionKey: "NEWS_ARCHIVE_DESCRIPTION",

  actionLabelKey: "NEWS_ARCHIVE_ACTION",
  actionHref: "/news/archive",

  categories: [
    {
      id: "all",
      slug: "all",
      labelKey: "NEWS_ARCHIVE_CATEGORY_ALL",
    },
    {
      id: "institutional",
      slug: "institutional",
      labelKey: "NEWS_CATEGORY_INSTITUTIONAL",
    },
    {
      id: "community",
      slug: "community",
      labelKey: "NEWS_CATEGORY_COMMUNITY",
    },
    {
      id: "culture",
      slug: "culture",
      labelKey: "NEWS_CATEGORY_CULTURE",
    },
    {
      id: "youth",
      slug: "youth",
      labelKey: "NEWS_CATEGORY_YOUTH",
    },
    {
      id: "development",
      slug: "development",
      labelKey: "NEWS_CATEGORY_DEVELOPMENT",
    },
  ],

  years: [
    {
      id: "2026",
      value: 2026,
      labelKey: "NEWS_ARCHIVE_YEAR_2026",
    },
    {
      id: "2025",
      value: 2025,
      labelKey: "NEWS_ARCHIVE_YEAR_2025",
    },
    {
      id: "2024",
      value: 2024,
      labelKey: "NEWS_ARCHIVE_YEAR_2024",
    },
  ],
} as const;