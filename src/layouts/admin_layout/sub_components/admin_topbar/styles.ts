import type { SxProps, Theme } from "@mui/material";
import { ADMIN_TOPBAR_HEIGHT } from "@design/tokens/layout";
import { motion } from "@design/tokens/motion";

export const root: SxProps<Theme> = {
  height: ADMIN_TOPBAR_HEIGHT,
  minHeight: ADMIN_TOPBAR_HEIGHT,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: { xs: 2, md: 4 },
  bgcolor: "header.main",
  borderBottom: "1px solid",
  borderColor: "divider",
  flexShrink: 0,
  position: "sticky",
  top: 0,
  zIndex: 10,
};

export const left: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  minWidth: 0,
};

export const right: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  flexShrink: 0,
};

export const iconButton: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "50%",
  cursor: "pointer",
  color: "text.secondary",
  border: "none",
  bgcolor: "transparent",
  transition: `background-color ${motion.fast} ease, color ${motion.fast} ease`,
  "&:hover": {
    bgcolor: "action.hover",
    color: "text.primary",
  },
};

export const mobileMenuButton: SxProps<Theme> = {
  ...iconButton,
  display: { lg: "none" },
};

export const pageTitle: SxProps<Theme> = {
  fontSize: 16,
  fontWeight: 700,
  color: "text.primary",
  lineHeight: 1,
};

export const userZone: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  pl: 1,
  ml: 0.5,
  borderLeft: "1px solid",
  borderColor: "divider",
};

export const avatar: SxProps<Theme> = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  bgcolor: "action.selected",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.secondary",
  flexShrink: 0,
};
