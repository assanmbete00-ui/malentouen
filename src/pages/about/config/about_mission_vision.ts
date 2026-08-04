import MISSION_VISION_IMAGE from "@assets/images/about/mission_vision.webp";

export const ABOUT_MISSION_VISION = {
  id: "mission-vision",

  image: MISSION_VISION_IMAGE,

  imageAltKey: "ABOUT_MISSION_VISION_IMAGE_ALT",

  eyebrowKey: "ABOUT_MISSION_VISION_EYEBROW",

  titleKey: "ABOUT_MISSION_VISION_TITLE",

  descriptionKey: "ABOUT_MISSION_VISION_DESCRIPTION",

  mission: {
    titleKey: "ABOUT_MISSION_TITLE",

    descriptionKey: "ABOUT_MISSION_DESCRIPTION",

    descriptionSecondaryKey:
      "ABOUT_MISSION_DESCRIPTION_SECONDARY",
  },

  vision: {
    titleKey: "ABOUT_VISION_TITLE",

    descriptionKey: "ABOUT_VISION_DESCRIPTION",

    descriptionSecondaryKey:
      "ABOUT_VISION_DESCRIPTION_SECONDARY",
  },
} as const;