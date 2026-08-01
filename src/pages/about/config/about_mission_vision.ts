import MISSION_VISION_IMAGE from "@assets/images/about/mission_vision.webp";

export const ABOUT_MISSION_VISION = {
  id: "mission-vision",

  image: MISSION_VISION_IMAGE,

  imageAltKey: "ABOUT_MISSION_VISION_IMAGE_ALT",

  eyebrowKey: "ABOUT_MISSION_VISION_EYEBROW",

  titleKey: "ABOUT_MISSION_VISION_TITLE",

  descriptionKey: "ABOUT_MISSION_VISION_DESCRIPTION",

  items: [
    {
      id: "mission",
      titleKey: "ABOUT_MISSION_VISION_ITEMS_MISSION_TITLE",
      descriptionKey:
        "ABOUT_MISSION_VISION_ITEMS_MISSION_DESCRIPTION",
    },

    {
      id: "vision",
      titleKey: "ABOUT_MISSION_VISION_ITEMS_VISION_TITLE",
      descriptionKey:
        "ABOUT_MISSION_VISION_ITEMS_VISION_DESCRIPTION",
    },
  ],
} as const;