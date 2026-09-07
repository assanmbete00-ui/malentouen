import type { SxProps, Theme } from "@mui/material";

import { ADMIN_SIDEBAR_WIDTH } from "@design/tokens/layout";

export const shell: SxProps<Theme> = {
  display: "flex",
  alignItems: "stretch",
  minHeight: "100vh",
  bgcolor: "background.default",
  overflowX: "hidden",
};

export const sidebarDesktop: SxProps<Theme> = {
  display: { xs: "none", lg: "flex" },
  width: ADMIN_SIDEBAR_WIDTH,
  flexShrink: 0,
  alignSelf: "stretch",
  bgcolor: "sidebar.main",
};

export const mainColumn: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  overflow: "hidden",
};

export const content: SxProps<Theme> = {
  flex: 1,
  width: "100%",
  maxWidth: 1600,
  p: { xs: 2, sm: 3, md: 4 },
};