import EVENTS_BANNER_IMAGE from "@assets/images/events/banner/banner.png";

export const EVENTS_BANNER = {
  image: EVENTS_BANNER_IMAGE,
  imageAltKey: "EVENTS_BANNER_IMAGE_ALT",
  imagePosition: "center",
  eyebrowKey: "EVENTS_BANNER_EYEBROW",
  titleKey: "EVENTS_BANNER_TITLE",
  descriptionKey: "EVENTS_BANNER_DESCRIPTION",
  breadcrumb: [
    {
      labelKey: "NAVIGATION_HOME",
      href: "/",
    },
    {
      labelKey: "EVENTS_BREADCRUMB",
    },
  ],
} as const;
