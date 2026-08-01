import ABOUT_BANNER_IMAGE from "@assets/images/about/banner.jpg";

export const ABOUT_BANNER = {
  image: ABOUT_BANNER_IMAGE,

  imageAltKey: "ABOUT_BANNER_IMAGE_ALT",

  imagePosition: "center",

  eyebrowKey: "ABOUT_BANNER_EYEBROW",

  titleKey: "ABOUT_BANNER_TITLE",

  descriptionKey: "ABOUT_BANNER_DESCRIPTION",

  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "NAVIGATION_ABOUT",
    },
  ],
} as const;