export const HEADER_CONFIG = {
  SHOW_TOP_BAR: true,
  SHOW_LANGUAGE_SELECTOR: false,
  SHOW_SEARCH_BUTTON: false,
  SHOW_ADMIN_BUTTON: true,
  SHOW_SOCIALS: false,

  ENABLE_STICKY: true,
  ENABLE_SCROLL_SHADOW: true,
  ENABLE_COMPACT_ON_SCROLL: true,

  TOP_BAR_HEIGHT: 40,
  HEADER_HEIGHT: 88,
  COMPACT_HEADER_HEIGHT: 72,

  SCROLL_TRIGGER: 80,

  ADMIN_PATH: "/admin/login",
  SEARCH_PATH: "/search",

  MOBILE_BREAKPOINT: "md",

  BRAND: {
    DISPLAY_NAME: "Chefferie Traditionnelle de Malentouen",
    SHORT_NAME: "Malentouen",
    TAGLINE: "Patrimoine • Tradition • Développement",
  },
} as const;

export type HeaderConfig = typeof HEADER_CONFIG;