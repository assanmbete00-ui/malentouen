import PARTNERS_BANNER_IMAGE from "@assets/images/about/banner.jpg";

export const PARTNERS_BANNER = {
  image: PARTNERS_BANNER_IMAGE,

  imageAltKey: "PARTNERS_BANNER_IMAGE_ALT",

  imagePosition: "center",

  eyebrowKey: "PARTNERS_BANNER_EYEBROW",

  titleKey: "PARTNERS_BANNER_TITLE",

  descriptionKey: "PARTNERS_BANNER_DESCRIPTION",

  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "PARTNERS_BREADCRUMB",
    },
  ],
} as const;
