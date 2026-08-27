import type { EventSource } from "./types";

export const EVENTS: EventSource[] = [
  {
    id: "festival",
    slug: "festival-culturel-traditionnel-malentouen",
    categoryKey: "HOME_EVENTS_FESTIVAL_CATEGORY",
    titleKey: "HOME_EVENTS_FESTIVAL_TITLE",
    date: "2026-08-12",
    startTime: "09:00",
    locationKey: "HOME_EVENTS_FESTIVAL_LOCATION",
  },
  {
    id: "council",
    slug: "session-conseil-notables",
    categoryKey: "HOME_EVENTS_COUNCIL_CATEGORY",
    titleKey: "HOME_EVENTS_COUNCIL_TITLE",
    date: "2026-09-25",
    startTime: "10:00",
    locationKey: "HOME_EVENTS_COUNCIL_LOCATION",
  },
  {
    id: "culture",
    slug: "journee-patrimoine-culturel",
    categoryKey: "HOME_EVENTS_CULTURE_CATEGORY",
    titleKey: "HOME_EVENTS_CULTURE_TITLE",
    date: "2026-11-05",
    startTime: "08:30",
    locationKey: "HOME_EVENTS_CULTURE_LOCATION",
  },
];
