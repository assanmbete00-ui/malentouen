import HERITAGE_PALACE_IMAGE from "@assets/images/about/heritage_palace.webp";
import HERITAGE_CULTURE_IMAGE from "@assets/images/about/heritage_culture.webp";
import HERITAGE_TERRITORY_IMAGE from "@assets/images/about/heritage_territory.webp";

export const ABOUT_HERITAGE_LANDMARKS = {
  id: "heritage-landmarks",

  eyebrowKey: "ABOUT_HERITAGE_LANDMARKS_EYEBROW",

  titleKey: "ABOUT_HERITAGE_LANDMARKS_TITLE",

  descriptionKey: "ABOUT_HERITAGE_LANDMARKS_DESCRIPTION",

  items: [
    {
      id: "palace",

      image: HERITAGE_PALACE_IMAGE,

      imageAltKey:
        "ABOUT_HERITAGE_LANDMARKS_PALACE_IMAGE_ALT",

      titleKey:
        "ABOUT_HERITAGE_LANDMARKS_PALACE_TITLE",

      descriptionKey:
        "ABOUT_HERITAGE_LANDMARKS_PALACE_DESCRIPTION",
    },

    {
      id: "culture",

      image: HERITAGE_CULTURE_IMAGE,

      imageAltKey:
        "ABOUT_HERITAGE_LANDMARKS_CULTURE_IMAGE_ALT",

      titleKey:
        "ABOUT_HERITAGE_LANDMARKS_CULTURE_TITLE",

      descriptionKey:
        "ABOUT_HERITAGE_LANDMARKS_CULTURE_DESCRIPTION",
    },

    {
      id: "territory",

      image: HERITAGE_TERRITORY_IMAGE,

      imageAltKey:
        "ABOUT_HERITAGE_LANDMARKS_TERRITORY_IMAGE_ALT",

      titleKey:
        "ABOUT_HERITAGE_LANDMARKS_TERRITORY_TITLE",

      descriptionKey:
        "ABOUT_HERITAGE_LANDMARKS_TERRITORY_DESCRIPTION",
    },
  ],
} as const;