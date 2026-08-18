export const NEWS_OFFICIAL_UPDATES = {
  id: "official-updates",

  eyebrowKey: "NEWS_OFFICIAL_UPDATES_EYEBROW",
  titleKey: "NEWS_OFFICIAL_UPDATES_TITLE",
  descriptionKey: "NEWS_OFFICIAL_UPDATES_DESCRIPTION",

  action: {
    LabelKey: "NEWS_OFFICIAL_UPDATES_VIEW_ALL",
    Href: "/news/archive?type=official",
  },

  items: [
    {
      id: "official-update-01",
      slug: "community-consultation-announcement",
      type: "communique",
      publishedAt: "2026-08-12",

      titleKey: "NEWS_OFFICIAL_UPDATE_01_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_01_EXCERPT",
      actionLabelKey: "NEWS_OFFICIAL_UPDATE_READ_COMMUNIQUE",

      href: "/news/community-consultation-announcement",
    },
    {
      id: "official-update-02",
      slug: "traditional-authorities-meeting",
      type: "announcement",
      publishedAt: "2026-08-09",

      titleKey: "NEWS_OFFICIAL_UPDATE_02_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_02_EXCERPT",
      actionLabelKey: "NEWS_OFFICIAL_UPDATE_READ_ANNOUNCEMENT",

      href: "/news/traditional-authorities-meeting",
    },
    {
      id: "official-update-03",
      slug: "community-information-notice",
      type: "notice",
      publishedAt: "2026-08-04",

      titleKey: "NEWS_OFFICIAL_UPDATE_03_TITLE",
      excerptKey: "NEWS_OFFICIAL_UPDATE_03_EXCERPT",
      actionLabelKey: "NEWS_OFFICIAL_UPDATE_READ_NOTICE",

      href: "/news/community-information-notice",
    },
  ],
} as const;