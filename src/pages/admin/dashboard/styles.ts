import type { SxProps, Theme } from "@mui/material";

const dashboardRow: SxProps<Theme> = {
  display: "grid",
  gap: { xs: 2, md: 3 },
  mt: { xs: 2, md: 3 },
};

export const overviewRow: SxProps<Theme> = {
  ...dashboardRow,
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
};

export const activityRow: SxProps<Theme> = {
  ...dashboardRow,
  gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
};

export const recentContentSection: SxProps<Theme> = {
  mt: { xs: 2, md: 3 },
};