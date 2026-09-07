import { Newspaper, CalendarDays, MessageSquare, Image } from "lucide-react";

import type { DashboardStatConfig } from "../types";

export const DASHBOARD_STATS_CONFIG: DashboardStatConfig[] = [
  {
    id: "news",
    labelKey: "ADMIN_DASHBOARD_STATS_NEWS",
    descriptionKey: "ADMIN_DASHBOARD_STATS_NEWS_DESCRIPTION",
    icon: Newspaper,
  },
  {
    id: "events",
    labelKey: "ADMIN_DASHBOARD_STATS_EVENTS",
    descriptionKey: "ADMIN_DASHBOARD_STATS_EVENTS_DESCRIPTION",
    icon: CalendarDays,
  },
  {
    id: "messages",
    labelKey: "ADMIN_DASHBOARD_STATS_MESSAGES",
    descriptionKey: "ADMIN_DASHBOARD_STATS_MESSAGES_DESCRIPTION",
    icon: MessageSquare,
  },
  {
    id: "media",
    labelKey: "ADMIN_DASHBOARD_STATS_MEDIA",
    descriptionKey: "ADMIN_DASHBOARD_STATS_MEDIA_DESCRIPTION",
    icon: Image,
  },
];
