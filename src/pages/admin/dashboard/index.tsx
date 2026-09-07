import { Box } from "@mui/material";

import AdminPageHeader from "@components/admin_page_header";

import useDashboard from "./hooks/use_dashboard";
import PendingActions from "./sub_components/pending_actions";
import QuickActions from "./sub_components/quick_actions";
import RecentActivity from "./sub_components/recent_activity";
import RecentContent from "./sub_components/recent_content";
import StatsGrid from "./sub_components/stats_grid";
import UpcomingEvents from "./sub_components/upcoming_events";
import * as styles from "./styles";

export default function AdminDashboard() {
  const {
    header,
    stats,
    pendingTitle,
    pendingActions,
    upcomingTitle,
    upcomingEmptyLabel,
    upcomingEvents,
    activityTitle,
    activityEmptyLabel,
    recentActivities,
    quickActionsTitle,
    quickActions,
    recentContentTitle,
    recentContentEmptyLabel,
    recentContentTypeLabel,
    recentContentStatusLabel,
    recentContentDateLabel,
    recentContent,
  } = useDashboard();

  return (
    <>
      <AdminPageHeader {...header} />
      <StatsGrid stats={stats} />

      <Box sx={styles.overviewRow}>
        <PendingActions title={pendingTitle} actions={pendingActions} />
        <UpcomingEvents
          title={upcomingTitle}
          emptyLabel={upcomingEmptyLabel}
          events={upcomingEvents}
        />
      </Box>

      <Box sx={styles.activityRow}>
        <RecentActivity
          title={activityTitle}
          emptyLabel={activityEmptyLabel}
          items={recentActivities}
        />
        <QuickActions title={quickActionsTitle} actions={quickActions} />
      </Box>

      <Box sx={styles.recentContentSection}>
        <RecentContent
          title={recentContentTitle}
          emptyLabel={recentContentEmptyLabel}
          typeLabel={recentContentTypeLabel}
          statusLabel={recentContentStatusLabel}
          dateLabel={recentContentDateLabel}
          items={recentContent}
        />
      </Box>
    </>
  );
}