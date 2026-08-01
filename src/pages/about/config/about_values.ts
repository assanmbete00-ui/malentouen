import {
  Castle,
  Diversity3,
  Public,
  Verified,
} from "@mui/icons-material";

export const ABOUT_VALUES = {
  id: "values",

  eyebrowKey: "ABOUT_VALUES_EYEBROW",

  titleKey: "ABOUT_VALUES_TITLE",

  descriptionKey: "ABOUT_VALUES_DESCRIPTION",

  items: [
    {
      id: "tradition",
      icon: Castle,
      titleKey: "ABOUT_VALUES_ITEMS_TRADITION_TITLE",
      descriptionKey:
        "ABOUT_VALUES_ITEMS_TRADITION_DESCRIPTION",
    },

    {
      id: "unity",
      icon: Diversity3,
      titleKey: "ABOUT_VALUES_ITEMS_UNITY_TITLE",
      descriptionKey:
        "ABOUT_VALUES_ITEMS_UNITY_DESCRIPTION",
    },

    {
      id: "integrity",
      icon: Verified,
      titleKey: "ABOUT_VALUES_ITEMS_INTEGRITY_TITLE",
      descriptionKey:
        "ABOUT_VALUES_ITEMS_INTEGRITY_DESCRIPTION",
    },

    {
      id: "development",
      icon: Public,
      titleKey: "ABOUT_VALUES_ITEMS_DEVELOPMENT_TITLE",
      descriptionKey:
        "ABOUT_VALUES_ITEMS_DEVELOPMENT_DESCRIPTION",
    },
  ],
} as const;