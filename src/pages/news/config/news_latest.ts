import NEWS_LATEST_IMAGE_01 from "@assets/images/news/latest/news1.jpg";
import NEWS_LATEST_IMAGE_02 from "@assets/images/news/latest/news2.jpg";
import NEWS_LATEST_IMAGE_03 from "@assets/images/news/latest/news3.jpg";
import NEWS_LATEST_IMAGE_04 from "@assets/images/news/latest/news4.jpg";
import NEWS_LATEST_IMAGE_05 from "@assets/images/news/latest/news5.jpg";
import NEWS_LATEST_IMAGE_06 from "@assets/images/news/latest/news6.jpg";

export const NEWS_LATEST = {
  id: "latest-news",

  eyebrowKey: "NEWS_LATEST_EYEBROW",
  titleKey: "NEWS_LATEST_TITLE",
  descriptionKey: "NEWS_LATEST_DESCRIPTION",

  actionLabelKey: "NEWS_LATEST_ACTION",
  actionHref: "/news/archives",

  items: [
    {
      id: "news-latest-01",
      slug: "community-dialogue-malantouen",

      image: NEWS_LATEST_IMAGE_01,
      imageAltKey: "NEWS_LATEST_ITEM_01_IMAGE_ALT",

      category: {
        id: "community",
        slug: "community",
        labelKey: "NEWS_CATEGORY_COMMUNITY",
      },

      publishedAt: "2026-08-11",

      titleKey: "NEWS_LATEST_ITEM_01_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_01_EXCERPT",

      href: "/news/community-dialogue-malantouen",
    },

    {
      id: "news-latest-02",
      slug: "cultural-heritage-transmission",

      image: NEWS_LATEST_IMAGE_02,
      imageAltKey: "NEWS_LATEST_ITEM_02_IMAGE_ALT",

      category: {
        id: "culture",
        slug: "culture",
        labelKey: "NEWS_CATEGORY_CULTURE",
      },

      publishedAt: "2026-08-08",

      titleKey: "NEWS_LATEST_ITEM_02_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_02_EXCERPT",

      href: "/news/cultural-heritage-transmission",
    },

    {
      id: "news-latest-03",
      slug: "youth-community-engagement",

      image: NEWS_LATEST_IMAGE_03,
      imageAltKey: "NEWS_LATEST_ITEM_03_IMAGE_ALT",

      category: {
        id: "youth",
        slug: "youth",
        labelKey: "NEWS_CATEGORY_YOUTH",
      },

      publishedAt: "2026-08-05",

      titleKey: "NEWS_LATEST_ITEM_03_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_03_EXCERPT",

      href: "/news/youth-community-engagement",
    },

    {
      id: "news-latest-04",
      slug: "local-development-initiative",

      image: NEWS_LATEST_IMAGE_04,
      imageAltKey: "NEWS_LATEST_ITEM_04_IMAGE_ALT",

      category: {
        id: "development",
        slug: "development",
        labelKey: "NEWS_CATEGORY_DEVELOPMENT",
      },

      publishedAt: "2026-08-02",

      titleKey: "NEWS_LATEST_ITEM_04_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_04_EXCERPT",

      href: "/news/local-development-initiative",
    },

    {
      id: "news-latest-05",
      slug: "traditional-ceremony-malantouen",

      image: NEWS_LATEST_IMAGE_05,
      imageAltKey: "NEWS_LATEST_ITEM_05_IMAGE_ALT",

      category: {
        id: "culture",
        slug: "culture",
        labelKey: "NEWS_CATEGORY_CULTURE",
      },

      publishedAt: "2026-07-29",

      titleKey: "NEWS_LATEST_ITEM_05_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_05_EXCERPT",

      href: "/news/traditional-ceremony-malantouen",
    },

    {
      id: "news-latest-06",
      slug: "institutional-meeting-malantouen",

      image: NEWS_LATEST_IMAGE_06,
      imageAltKey: "NEWS_LATEST_ITEM_06_IMAGE_ALT",

      category: {
        id: "institutional",
        slug: "institutional",
        labelKey: "NEWS_CATEGORY_INSTITUTIONAL",
      },

      publishedAt: "2026-07-25",

      titleKey: "NEWS_LATEST_ITEM_06_TITLE",
      excerptKey: "NEWS_LATEST_ITEM_06_EXCERPT",

      href: "/news/institutional-meeting-malantouen",
    },
  ],
} as const;