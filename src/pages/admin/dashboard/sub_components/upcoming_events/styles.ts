import type { SxProps, Theme } from "@mui/material";

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

export const emptyState: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: { xs: 2.5, md: 3 },
  color: "text.disabled",
  fontSize: 14,
  textAlign: "center",
};

export const eventRow: SxProps<Theme> = {
  py: 1.25,
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:last-of-type": { borderBottom: "none", pb: 0 },
};

export const eventTitle: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 600,
  color: "text.primary",
  mb: 0.25,
};

export const eventMeta: SxProps<Theme> = {
  fontSize: 12,
  color: "text.secondary",
};
