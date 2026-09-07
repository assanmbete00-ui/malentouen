import { Newspaper, CalendarDays, Image, Landmark } from "lucide-react";

import type { QuickActionItem } from "../types";

type QuickActionConfig = Omit<QuickActionItem, "label"> & {
  labelKey: string;
};

export const DASHBOARD_QUICK_ACTIONS_CONFIG: QuickActionConfig[] = [
  {
    id: "news",
    labelKey: "ADMIN_DASHBOARD_QUICK_ACTIONS_NEWS",
    icon: Newspaper,
    path: "/admin/news",
  },
  {
    id: "event",
    labelKey: "ADMIN_DASHBOARD_QUICK_ACTIONS_EVENT",
    icon: CalendarDays,
    path: "/admin/events",
  },
  {
    id: "media",
    labelKey: "ADMIN_DASHBOARD_QUICK_ACTIONS_MEDIA",
    icon: Image,
    path: "/admin/gallery",
  },
  {
    id: "culture",
    labelKey: "ADMIN_DASHBOARD_QUICK_ACTIONS_CULTURE",
    icon: Landmark,
    path: "/admin/cultures",
  },
];
