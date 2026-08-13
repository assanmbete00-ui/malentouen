import NEWS_PROJECT_IMAGE_01 from "@assets/images/news/projects/project2.jpg";
import NEWS_PROJECT_IMAGE_02 from "@assets/images/news/projects/project1.jpg";
import NEWS_PROJECT_IMAGE_03 from "@assets/images/news/projects/projects3.jpg";

export const NEWS_PROJECTS_DEVELOPMENT = {
  id: "projects-development",

  eyebrowKey: "NEWS_PROJECTS_DEVELOPMENT_EYEBROW",
  titleKey: "NEWS_PROJECTS_DEVELOPMENT_TITLE",
  descriptionKey: "NEWS_PROJECTS_DEVELOPMENT_DESCRIPTION",

  actionLabelKey: "NEWS_PROJECTS_DEVELOPMENT_ACTION",
  actionHref: "/news/archive",

  items: [
    {
      id: "project-development-01",
      slug: "community-infrastructure-support",

      image: NEWS_PROJECT_IMAGE_01,
      imageAltKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_01_IMAGE_ALT",

      category: {
        id: "development",
        slug: "development",
        labelKey: "NEWS_CATEGORY_DEVELOPMENT",
      },

      publishedAt: "2026-08-09",

      titleKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_01_TITLE",
      excerptKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_01_EXCERPT",

      href: "/news/community-infrastructure-support",
    },

    {
      id: "project-development-02",
      slug: "youth-capacity-development",

      image: NEWS_PROJECT_IMAGE_02,
      imageAltKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_02_IMAGE_ALT",

      category: {
        id: "youth",
        slug: "youth",
        labelKey: "NEWS_CATEGORY_YOUTH",
      },

      publishedAt: "2026-08-03",

      titleKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_02_TITLE",
      excerptKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_02_EXCERPT",

      href: "/news/youth-capacity-development",
    },

    {
      id: "project-development-03",
      slug: "local-economic-initiatives",

      image: NEWS_PROJECT_IMAGE_03,
      imageAltKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_03_IMAGE_ALT",

      category: {
        id: "development",
        slug: "development",
        labelKey: "NEWS_CATEGORY_DEVELOPMENT",
      },

      publishedAt: "2026-07-28",

      titleKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_03_TITLE",
      excerptKey: "NEWS_PROJECTS_DEVELOPMENT_ITEM_03_EXCERPT",

      href: "/news/local-economic-initiatives",
    },
  ],
} as const;