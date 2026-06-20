import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2.8,
  maxWidth: 410,
};

const identityRow: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const emblem: SxProps<Theme> = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  bgcolor: "secondary.main",
  color: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: 26,
  flexShrink: 0,
};

const identityText: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.05,
};

const eyebrow: SxProps<Theme> = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "secondary.main",
};

const title: SxProps<Theme> = {
  mt: 0.3,
  fontSize: { xs: 24, md: 28 },
  fontWeight: 900,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "primary.contrastText",
};

const slogan: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.9,
  fontSize: 15,
  lineHeight: 1.8,
};

const description: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.76,
  fontSize: 14,
  lineHeight: 2,
  maxWidth: 380,
};

export default {
  container,
  identityRow,
  emblem,
  identityText,
  eyebrow,
  title,
  slogan,
  description,
};