import TRADITIONS_IMAGE from "@assets/images/cultures/traditions/trandition.png";
import CEREMONIES_IMAGE from "@assets/images/cultures/traditions/ceremonie.png";
import DANCES_IMAGE from "@assets/images/cultures/traditions/dance.png";
import SYMBOLS_IMAGE from "@assets/images/cultures/traditions/symboles.png";

export const CULTURES_TRADITIONS = {
  id: "traditions",

  eyebrowKey: "CULTURES_TRADITIONS_EYEBROW",

  titleKey: "CULTURES_TRADITIONS_TITLE",

  descriptionKey: "CULTURES_TRADITIONS_DESCRIPTION",

  items: [
    {
      id: "traditions",

      image: TRADITIONS_IMAGE,

      imageAltKey: "CULTURES_TRADITIONS_IMAGE_ALT",

      categoryKey: "CULTURES_TRADITIONS_CATEGORY",

      titleKey: "CULTURES_TRADITIONS_ITEM_TITLE",

      descriptionKey: "CULTURES_TRADITIONS_ITEM_DESCRIPTION",
    },

    {
      id: "ceremonies",

      image: CEREMONIES_IMAGE,

      imageAltKey: "CULTURES_CEREMONIES_IMAGE_ALT",

      categoryKey: "CULTURES_CEREMONIES_CATEGORY",

      titleKey: "CULTURES_CEREMONIES_TITLE",

      descriptionKey: "CULTURES_CEREMONIES_DESCRIPTION",
    },

    {
      id: "dances",

      image: DANCES_IMAGE,

      imageAltKey: "CULTURES_DANCES_IMAGE_ALT",

      categoryKey: "CULTURES_DANCES_CATEGORY",

      titleKey: "CULTURES_DANCES_TITLE",

      descriptionKey: "CULTURES_DANCES_DESCRIPTION",
    },

    {
      id: "symbols",

      image: SYMBOLS_IMAGE,

      imageAltKey: "CULTURES_SYMBOLS_IMAGE_ALT",

      categoryKey: "CULTURES_SYMBOLS_CATEGORY",

      titleKey: "CULTURES_SYMBOLS_TITLE",

      descriptionKey: "CULTURES_SYMBOLS_DESCRIPTION",
    },
  ],
} as const;
