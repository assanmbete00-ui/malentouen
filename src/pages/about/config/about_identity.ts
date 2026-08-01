import ABOUT_IDENTITY_IMAGE from "@assets/images/about/identity.webp";

export const ABOUT_IDENTITY = {
  id: "identity",
  image: ABOUT_IDENTITY_IMAGE,
  imageAltKey: "ABOUT_IDENTITY_IMAGE_ALT",

  eyebrowKey: "ABOUT_IDENTITY_EYEBROW",

  titleKey: "ABOUT_IDENTITY_TITLE",

  descriptionKey: "ABOUT_IDENTITY_DESCRIPTION",

  descriptionSecondaryKey: "ABOUT_IDENTITY_DESCRIPTION_SECONDARY",

  highlights: [
    {
      id: "about-identity-highlight-institution",
      titleKey: "ABOUT_IDENTITY_HIGHLIGHTS_INSTITUTION_TITLE",
      descriptionKey: "ABOUT_IDENTITY_HIGHLIGHTS_INSTITUTION_DESCRIPTION",
    },
    {
      id: "about-identity-highlight-territory",
      titleKey: "ABOUT_IDENTITY_HIGHLIGHTS_TERRITORY_TITLE",
      descriptionKey: "ABOUT_IDENTITY_HIGHLIGHTS_TERRITORY_DESCRIPTION",
    },
    {
      id: "about-identity-highlight-heritage",
      titleKey: "ABOUT_IDENTITY_HIGHLIGHTS_HERITAGE_TITLE",
      descriptionKey: "ABOUT_IDENTITY_HIGHLIGHTS_HERITAGE_DESCRIPTION",
    },
  ],
} as const;
