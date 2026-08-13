import NEWS_COMMUNITY_IMAGE_01 from "@assets/images/news/community/news1.jpg";
import NEWS_COMMUNITY_IMAGE_02 from "@assets/images/news/community/news2.jpg";
import NEWS_COMMUNITY_IMAGE_03 from "@assets/images/news/community/news4.jpg";
import NEWS_COMMUNITY_IMAGE_04 from "@assets/images/news/community/news3.png";

export const NEWS_COMMUNITY_CULTURE = {
  id: "community-culture",

  eyebrowKey: "NEWS_COMMUNITY_CULTURE_EYEBROW",
  titleKey: "NEWS_COMMUNITY_CULTURE_TITLE",
  descriptionKey: "NEWS_COMMUNITY_CULTURE_DESCRIPTION",

  actionLabelKey: "NEWS_COMMUNITY_CULTURE_ACTION",
  actionHref: "/news/archive",

  items: [
    {
      id: "community-culture-01",
      slug: "community-solidarity-malantouen",

      image: NEWS_COMMUNITY_IMAGE_01,
      imageAltKey: "NEWS_COMMUNITY_CULTURE_ITEM_01_IMAGE_ALT",

      category: {
        id: "community",
        slug: "community",
        labelKey: "NEWS_CATEGORY_COMMUNITY",
      },

      publishedAt: "2026-08-10",

      titleKey: "NEWS_COMMUNITY_CULTURE_ITEM_01_TITLE",
      excerptKey: "NEWS_COMMUNITY_CULTURE_ITEM_01_EXCERPT",

      href: "/news/community-solidarity-malantouen",
    },

    {
      id: "community-culture-02",
      slug: "cultural-transmission-youth",

      image: NEWS_COMMUNITY_IMAGE_02,
      imageAltKey: "NEWS_COMMUNITY_CULTURE_ITEM_02_IMAGE_ALT",

      category: {
        id: "culture",
        slug: "culture",
        labelKey: "NEWS_CATEGORY_CULTURE",
      },

      publishedAt: "2026-08-06",

      titleKey: "NEWS_COMMUNITY_CULTURE_ITEM_02_TITLE",
      excerptKey: "NEWS_COMMUNITY_CULTURE_ITEM_02_EXCERPT",

      href: "/news/cultural-transmission-youth",
    },

    {
      id: "community-culture-03",
      slug: "women-community-life",

      image: NEWS_COMMUNITY_IMAGE_03,
      imageAltKey: "NEWS_COMMUNITY_CULTURE_ITEM_03_IMAGE_ALT",

      category: {
        id: "community",
        slug: "community",
        labelKey: "NEWS_CATEGORY_COMMUNITY",
      },

      publishedAt: "2026-08-01",

      titleKey: "NEWS_COMMUNITY_CULTURE_ITEM_03_TITLE",
      excerptKey: "NEWS_COMMUNITY_CULTURE_ITEM_03_EXCERPT",

      href: "/news/women-community-life",
    },

    {
      id: "community-culture-04",
      slug: "traditional-knowledge-memory",

      image: NEWS_COMMUNITY_IMAGE_04,
      imageAltKey: "NEWS_COMMUNITY_CULTURE_ITEM_04_IMAGE_ALT",

      category: {
        id: "culture",
        slug: "culture",
        labelKey: "NEWS_CATEGORY_CULTURE",
      },

      publishedAt: "2026-07-27",

      titleKey: "NEWS_COMMUNITY_CULTURE_ITEM_04_TITLE",
      excerptKey: "NEWS_COMMUNITY_CULTURE_ITEM_04_EXCERPT",

      href: "/news/traditional-knowledge-memory",
    },
  ],
} as const;