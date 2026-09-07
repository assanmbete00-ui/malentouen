import useTranslate from "@hooks/use_translate";

import { DASHBOARD_STATS_CONFIG } from "../config/dashboard_stats";
import { DASHBOARD_QUICK_ACTIONS_CONFIG } from "../config/dashboard_quick_actions";
import type { AdminPageHeaderProps } from "@components/admin_page_header/types";
import type {
  DashboardStat,
  PendingAction,
  UpcomingEvent,
  RecentActivityItem,
  QuickActionItem,
  RecentContentItem,
} from "../types";

const STAT_VALUES: Record<string, number> = {
  news: 0,
  events: 0,
  messages: 0,
  media: 0,
};

type UseDashboardReturn = {
  header: Pick<AdminPageHeaderProps, "title" | "description">;
  stats: DashboardStat[];
  pendingTitle: string;
  pendingActions: PendingAction[];
  upcomingTitle: string;
  upcomingEmptyLabel: string;
  upcomingEvents: UpcomingEvent[];
  activityTitle: string;
  activityEmptyLabel: string;
  recentActivities: RecentActivityItem[];
  quickActionsTitle: string;
  quickActions: QuickActionItem[];
  recentContentTitle: string;
  recentContentEmptyLabel: string;
  recentContentTypeLabel: string;
  recentContentStatusLabel: string;
  recentContentDateLabel: string;
  recentContent: RecentContentItem[];
};

export default function useDashboard(): UseDashboardReturn {
  const { translate } = useTranslate();

  const header = {
    title: translate("ADMIN_DASHBOARD_TITLE"),
    description: translate("ADMIN_DASHBOARD_DESCRIPTION"),
  };

  const stats: DashboardStat[] = DASHBOARD_STATS_CONFIG.map((config) => ({
    id: config.id,
    label: translate(config.labelKey),
    value: STAT_VALUES[config.id] ?? 0,
    description: translate(config.descriptionKey),
    icon: config.icon,
  }));

  const pendingActions: PendingAction[] = [
    { id: "drafts", label: translate("ADMIN_DASHBOARD_PENDING_DRAFTS"), count: 0 },
    { id: "unread", label: translate("ADMIN_DASHBOARD_PENDING_UNREAD"), count: 0 },
    { id: "incomplete_events", label: translate("ADMIN_DASHBOARD_PENDING_INCOMPLETE_EVENTS"), count: 0 },
  ];

  const quickActions: QuickActionItem[] = DASHBOARD_QUICK_ACTIONS_CONFIG.map((config) => ({
    id: config.id,
    label: translate(config.labelKey),
    icon: config.icon,
    path: config.path,
  }));

  return {
    header,
    stats,
    pendingTitle: translate("ADMIN_DASHBOARD_PENDING_TITLE"),
    pendingActions,
    upcomingTitle: translate("ADMIN_DASHBOARD_EVENTS_TITLE"),
    upcomingEmptyLabel: translate("ADMIN_DASHBOARD_EVENTS_EMPTY"),
    upcomingEvents: [],
    activityTitle: translate("ADMIN_DASHBOARD_ACTIVITY_TITLE"),
    activityEmptyLabel: translate("ADMIN_DASHBOARD_ACTIVITY_EMPTY"),
    recentActivities: [],
    quickActionsTitle: translate("ADMIN_DASHBOARD_QUICK_ACTIONS_TITLE"),
    quickActions,
    recentContentTitle: translate("ADMIN_DASHBOARD_RECENT_CONTENT_TITLE"),
    recentContentEmptyLabel: translate("ADMIN_DASHBOARD_RECENT_CONTENT_EMPTY"),
    recentContentTypeLabel: translate("ADMIN_DASHBOARD_RECENT_CONTENT_TYPE"),
    recentContentStatusLabel: translate("ADMIN_DASHBOARD_RECENT_CONTENT_STATUS"),
    recentContentDateLabel: translate("ADMIN_DASHBOARD_RECENT_CONTENT_DATE"),
    recentContent: [],
  };
}
