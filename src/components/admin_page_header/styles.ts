import type { SxProps, Theme } from "@mui/material";
import { spacing } from "@design/tokens/spacing";

export const root: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  gap: { xs: spacing.md, sm: spacing.lg },
  mb: { xs: 3, md: 4 },
};

export const textBlock: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.75,
  minWidth: 0,
};

export const title: SxProps<Theme> = {
  fontSize: { xs: 22, sm: 28, md: 30 },
  fontWeight: 600,
  color: "text.primary",
  lineHeight: 1.2,
};

export const description: SxProps<Theme> = {
  fontSize: 14,
  color: "text.secondary",
  lineHeight: 1.6,
  maxWidth: 560,
};

export const actions: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  flexShrink: 0,
};
