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

export const row: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  py: 1.25,
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:last-of-type": { borderBottom: "none", pb: 0 },
};

export const rowLabel: SxProps<Theme> = {
  fontSize: 14,
  color: "text.secondary",
};

export const rowCount: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 700,
  color: "text.primary",
  minWidth: 24,
  textAlign: "right",
};
