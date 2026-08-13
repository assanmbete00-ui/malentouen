import NEWS_BANNER_IMAGE from "@assets/images/news/banner/banner.jpg";

export const NEWS_BANNER = {
  image: NEWS_BANNER_IMAGE,

  imageAltKey: "NEWS_BANNER_IMAGE_ALT",
  imagePosition: "center",

  eyebrowKey: "NEWS_BANNER_EYEBROW",
  titleKey: "NEWS_BANNER_TITLE",
  descriptionKey: "NEWS_BANNER_DESCRIPTION",

  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "NAVIGATION_NEWS",
    },
  ],
} as const;