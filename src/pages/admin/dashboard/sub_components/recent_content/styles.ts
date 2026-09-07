import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 2,
  p: { xs: 2.5, md: 3 },
};

export const header: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr auto auto auto",
  gap: 2,
  pb: 1,
  mb: 0.5,
  borderBottom: "1px solid",
  borderColor: "divider",
};

export const headerCell: SxProps<Theme> = {
  fontSize: 11,
  fontWeight: 700,
  color: "text.secondary",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

export const row: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr auto auto auto",
  gap: 2,
  py: 1.25,
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:last-of-type": { borderBottom: "none", pb: 0 },
};

export const rowTitle: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 500,
  color: "text.primary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const rowCell: SxProps<Theme> = {
  fontSize: 13,
  color: "text.secondary",
  textAlign: "right",
};

export const sectionTitle: SxProps<Theme> = {
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