export const FOOTER_CONFIG = {
  SHOW_SOCIALS: true,
  SHOW_CONTACT: true,
  SHOW_PATRIMONY: true,
  PATRIMONY_LINKS: [
    {
      id: "about",
      labelKey: "NAVIGATION_ABOUT",
      path: "/about",
    },
    {
      id: "culture",
      labelKey: "NAVIGATION_CULTURES",
      path: "/cultures",
    },
  ],
} as const;
