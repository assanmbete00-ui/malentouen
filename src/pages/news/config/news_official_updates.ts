export const NEWS_OFFICIAL_UPDATES = {
  id: "official-updates",

  eyebrowKey: "NEWS_OFFICIAL_UPDATES_EYEBROW",
  titleKey: "NEWS_OFFICIAL_UPDATES_TITLE",
  descriptionKey: "NEWS_OFFICIAL_UPDATES_DESCRIPTION",

  actionLabelKey: "NEWS_OFFICIAL_UPDATES_ACTION",
  actionHref: "/news/archive?type=official",
  itemActionLabelKey: "NEWS_OFFICIAL_UPDATES_ITEM_ACTION",

  items: [
    {
      id: "official-update-01",
      slug: "community-consultation-announcement",

      type: "communique",
      publishedAt: "2026-08-12",

      titleKey: "NEWS_OFFICIAL_UPDATE_01_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_01_EXCERPT",

      href: "/news/community-consultation-announcement",
    },

    {
      id: "official-update-02",
      slug: "traditional-authorities-meeting",

      type: "announcement",
      publishedAt: "2026-08-09",

      titleKey: "NEWS_OFFICIAL_UPDATE_02_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_02_EXCERPT",

      href: "/news/traditional-authorities-meeting",
    },

    {
      id: "official-update-03",
      slug: "community-information-notice",

      type: "notice",
      publishedAt: "2026-08-04",

      titleKey: "NEWS_OFFICIAL_UPDATE_03_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_03_EXCERPT",

      href: "/news/community-information-notice",
    },
  ],
} as const;