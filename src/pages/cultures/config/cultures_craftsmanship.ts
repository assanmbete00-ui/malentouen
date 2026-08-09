import SCULPTURE_IMAGE from "@assets/images/cultures/craftsmanship/sculture.png";
import TEXTILES_IMAGE from "@assets/images/cultures/craftsmanship/textile.png";
import METALWORK_IMAGE from "@assets/images/cultures/craftsmanship/metalwork.png";
import CRAFTS_IMAGE from "@assets/images/cultures/craftsmanship/crafts.png";

export const CULTURES_CRAFTSMANSHIP = {
  id: "craftsmanship",

  eyebrowKey: "CULTURES_CRAFTSMANSHIP_EYEBROW",

  titleKey: "CULTURES_CRAFTSMANSHIP_TITLE",

  descriptionKey: "CULTURES_CRAFTSMANSHIP_DESCRIPTION",

  items: [
    {
      id: "sculpture",

      image: SCULPTURE_IMAGE,

      imageAltKey: "CULTURES_CRAFTSMANSHIP_SCULPTURE_IMAGE_ALT",

      categoryKey: "CULTURES_CRAFTSMANSHIP_SCULPTURE_CATEGORY",

      titleKey: "CULTURES_CRAFTSMANSHIP_SCULPTURE_TITLE",

      descriptionKey: "CULTURES_CRAFTSMANSHIP_SCULPTURE_DESCRIPTION",
    },

    {
      id: "textiles",

      image: TEXTILES_IMAGE,

      imageAltKey: "CULTURES_CRAFTSMANSHIP_TEXTILES_IMAGE_ALT",

      categoryKey: "CULTURES_CRAFTSMANSHIP_TEXTILES_CATEGORY",

      titleKey: "CULTURES_CRAFTSMANSHIP_TEXTILES_TITLE",

      descriptionKey: "CULTURES_CRAFTSMANSHIP_TEXTILES_DESCRIPTION",
    },

    {
      id: "metalwork",

      image: METALWORK_IMAGE,

      imageAltKey: "CULTURES_CRAFTSMANSHIP_METALWORK_IMAGE_ALT",

      categoryKey: "CULTURES_CRAFTSMANSHIP_METALWORK_CATEGORY",

      titleKey: "CULTURES_CRAFTSMANSHIP_METALWORK_TITLE",

      descriptionKey: "CULTURES_CRAFTSMANSHIP_METALWORK_DESCRIPTION",
    },

    {
      id: "crafts",

      image: CRAFTS_IMAGE,

      imageAltKey: "CULTURES_CRAFTSMANSHIP_CRAFTS_IMAGE_ALT",

      categoryKey: "CULTURES_CRAFTSMANSHIP_CRAFTS_CATEGORY",

      titleKey: "CULTURES_CRAFTSMANSHIP_CRAFTS_TITLE",

      descriptionKey: "CULTURES_CRAFTSMANSHIP_CRAFTS_DESCRIPTION",
    },
  ],
} as const;
