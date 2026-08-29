import CONTACT_BANNER_IMAGE from "@assets/images/history/history.png";

export const CONTACT_BANNER = {
  image: CONTACT_BANNER_IMAGE,
  imageAltKey: "CONTACT_BANNER_IMAGE_ALT",
  imagePosition: "center",
  eyebrowKey: "CONTACT_BANNER_EYEBROW",
  titleKey: "CONTACT_BANNER_TITLE",
  descriptionKey: "CONTACT_BANNER_DESCRIPTION",
  breadcrumb: [
    { labelKey: "NAVIGATION_HOME", href: "/" },
    { labelKey: "NAVIGATION_CONTACT" },
  ],
} as const;