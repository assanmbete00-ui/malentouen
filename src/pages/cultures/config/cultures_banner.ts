import CULTURES_BANNER_IMAGE from "@assets/images/cultures/banner/banner.jpg";

export const CULTURES_BANNER = {
  image: CULTURES_BANNER_IMAGE,

  imageAltKey: "CULTURES_BANNER_IMAGE_ALT",

  imagePosition: "center",

  eyebrowKey: "CULTURES_BANNER_EYEBROW",

  titleKey: "CULTURES_BANNER_TITLE",

  descriptionKey: "CULTURES_BANNER_DESCRIPTION",

  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "NAVIGATION_CULTURES",
    },
  ],
} as const;