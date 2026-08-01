// Réutiliser ici l’image déjà employée par la section History de la Home.
import ABOUT_HISTORY_IMAGE from "@assets/images/history/history.png";

export const ABOUT_HISTORY = {
  id: "history",

  image: ABOUT_HISTORY_IMAGE,

  imageAltKey: "ABOUT_HISTORY_IMAGE_ALT",

  eyebrowKey: "ABOUT_HISTORY_EYEBROW",

  titleKey: "ABOUT_HISTORY_TITLE",

  descriptionKey: "ABOUT_HISTORY_DESCRIPTION",

  descriptionSecondaryKey: "ABOUT_HISTORY_DESCRIPTION_SECONDARY",

  timeline: [
    {
      id: "origins",

      periodKey: "ABOUT_HISTORY_ORIGINS_PERIOD",

      titleKey: "ABOUT_HISTORY_ORIGINS_TITLE",

      descriptionKey: "ABOUT_HISTORY_ORIGINS_DESCRIPTION",
    },

    {
      id: "transmission",

      periodKey: "ABOUT_HISTORY_TRANSMISSION_PERIOD",

      titleKey: "ABOUT_HISTORY_TRANSMISSION_TITLE",

      descriptionKey: "ABOUT_HISTORY_TRANSMISSION_DESCRIPTION",
    },

    {
      id: "evolution",

      periodKey: "ABOUT_HISTORY_EVOLUTION_PERIOD",

      titleKey: "ABOUT_HISTORY_EVOLUTION_TITLE",

      descriptionKey: "ABOUT_HISTORY_EVOLUTION_DESCRIPTION",
    },

    {
      id: "today",

      periodKey: "ABOUT_HISTORY_TODAY_PERIOD",

      titleKey: "ABOUT_HISTORY_TODAY_TITLE",

      descriptionKey: "ABOUT_HISTORY_TODAY_DESCRIPTION",
    },
  ],
} as const;