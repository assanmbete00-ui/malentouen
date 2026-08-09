import MUSIC_IMAGE from "@assets/images/cultures/expressions/music.png";
import DANCE_IMAGE from "@assets/images/cultures/expressions/dance.png";
import CLOTHING_IMAGE from "@assets/images/cultures/expressions/clothing.png";
import LANGUAGE_IMAGE from "@assets/images/cultures/expressions/language.png";

export const CULTURES_EXPRESSIONS = {
  id: "expressions",

  eyebrowKey: "CULTURES_EXPRESSIONS_EYEBROW",

  titleKey: "CULTURES_EXPRESSIONS_TITLE",

  descriptionKey: "CULTURES_EXPRESSIONS_DESCRIPTION",

  items: [
    {
      id: "music",

      image: MUSIC_IMAGE,

      imageAltKey: "CULTURES_EXPRESSIONS_MUSIC_IMAGE_ALT",

      categoryKey: "CULTURES_EXPRESSIONS_MUSIC_CATEGORY",

      titleKey: "CULTURES_EXPRESSIONS_MUSIC_TITLE",

      descriptionKey: "CULTURES_EXPRESSIONS_MUSIC_DESCRIPTION",
    },

    {
      id: "dance",

      image: DANCE_IMAGE,

      imageAltKey: "CULTURES_EXPRESSIONS_DANCE_IMAGE_ALT",

      categoryKey: "CULTURES_EXPRESSIONS_DANCE_CATEGORY",

      titleKey: "CULTURES_EXPRESSIONS_DANCE_TITLE",

      descriptionKey: "CULTURES_EXPRESSIONS_DANCE_DESCRIPTION",
    },

    {
      id: "clothing",

      image: CLOTHING_IMAGE,

      imageAltKey: "CULTURES_EXPRESSIONS_CLOTHING_IMAGE_ALT",

      categoryKey: "CULTURES_EXPRESSIONS_CLOTHING_CATEGORY",

      titleKey: "CULTURES_EXPRESSIONS_CLOTHING_TITLE",

      descriptionKey: "CULTURES_EXPRESSIONS_CLOTHING_DESCRIPTION",
    },

    {
      id: "language",

      image: LANGUAGE_IMAGE,

      imageAltKey: "CULTURES_EXPRESSIONS_LANGUAGE_IMAGE_ALT",

      categoryKey: "CULTURES_EXPRESSIONS_LANGUAGE_CATEGORY",

      titleKey: "CULTURES_EXPRESSIONS_LANGUAGE_TITLE",

      descriptionKey: "CULTURES_EXPRESSIONS_LANGUAGE_DESCRIPTION",
    },
  ],
} as const;
