import type { SxProps, Theme } from "@mui/material";
import { ADMIN_SECONDARY } from "@constants/admin_colors";
import { motion } from "@design/tokens/motion";
import { radius } from "@design/tokens/radius";

export const root: SxProps<Theme> = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 2,
  p: { xs: 2.5, md: 3 },
  height: "100%",
};

export const title: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 700,
  color: "text.primary",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  mb: 2,
};

export const list: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

export const actionItem: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  px: 1.5,
  py: 1.25,
  borderRadius: radius.md,
  cursor: "pointer",
  color: "text.secondary",
  textDecoration: "none",
  transition: `background-color ${motion.fast} ${motion.easing}, color ${motion.fast} ${motion.easing}`,
  "&:hover": {
    bgcolor: "action.hover",
    color: "text.primary",
  },
};

export const actionIcon: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  color: ADMIN_SECONDARY,
  flexShrink: 0,
};

export const actionLabel: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 500,
};
