import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",
  minHeight: 40,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  display: { xs: "none", md: "flex" },
  alignItems: "center",
};

const inner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1920px",
  mx: "auto",
  px: { md: 3, lg: 5 },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
};

const left: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 3,
};

const right: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const infoItem: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  fontSize: 13,
  opacity: 0.92,
  whiteSpace: "nowrap",
};

const icon: SxProps<Theme> = {
  fontSize: 16,
  color: "secondary.main",
};

const language: SxProps<Theme> = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.04em",
};

export default {
  container,
  inner,
  left,
  right,
  infoItem,
  icon,
  language,
};