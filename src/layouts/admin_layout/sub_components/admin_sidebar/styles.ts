import type { SxProps, Theme } from "@mui/material";
import { ADMIN_SECONDARY } from "@constants/admin_colors";
import { ADMIN_SIDEBAR_WIDTH } from "@design/tokens/layout";
import { motion } from "@design/tokens/motion";
import { radius } from "@design/tokens/radius";

export const root: SxProps<Theme> = {
  width: ADMIN_SIDEBAR_WIDTH,
  height: "100vh",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 0,
  bgcolor: "sidebar.main",
  borderRight: "1px solid",
  borderColor: "divider",
  overflowY: "auto",
  overflowX: "hidden",
};

export const brand: SxProps<Theme> = {
  px: 3,
  py: 2.5,
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  borderBottom: "1px solid",
  borderColor: "divider",
  flexShrink: 0,
};

export const emblem: SxProps<Theme> = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  bgcolor: ADMIN_SECONDARY,
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: 16,
  flexShrink: 0,
};

export const brandText: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.2,
  minWidth: 0,
};

export const brandName: SxProps<Theme> = {
  fontSize: 13,
  fontWeight: 800,
  color: "text.primary",
  lineHeight: 1.2,
};

export const brandSubtitle: SxProps<Theme> = {
  fontSize: 11,
  color: "text.secondary",
  lineHeight: 1.2,
};

export const nav: SxProps<Theme> = {
  flex: 1,
  px: 1.5,
  py: 2,
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

export const groupLabel: SxProps<Theme> = {
  px: 1.5,
  pt: 2,
  pb: 0.5,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "text.secondary",
  opacity: 0.55,
  "&:first-of-type": { pt: 0 },
};

export const navItem = (active: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  px: 1.5,
  py: 1,
  borderRadius: radius.md,
  cursor: "pointer",
  position: "relative",
  transition: `background-color ${motion.fast} ${motion.easing}, color ${motion.fast} ${motion.easing}`,
  bgcolor: active ? "action.selected" : "transparent",
  color: active ? "text.primary" : "text.secondary",
  textDecoration: "none",
  "&:hover": {
    bgcolor: active ? "action.selected" : "action.hover",
    color: "text.primary",
  },
  "&::before": active
    ? {
        content: '""',
        position: "absolute",
        left: 0,
        top: "20%",
        height: "60%",
        width: 3,
        borderRadius: "0 2px 2px 0",
        bgcolor: ADMIN_SECONDARY,
      }
    : {},
});

export const navIcon = (active: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  color: active ? ADMIN_SECONDARY : "inherit",
  flexShrink: 0,
});

export const navLabel: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
