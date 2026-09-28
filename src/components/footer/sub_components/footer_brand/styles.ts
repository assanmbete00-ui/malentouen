import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.6,
  maxWidth: 360,
};

const identityRow: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const slogan: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.88,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.6,
};

const description: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.78,
  fontSize: 13.5,
  lineHeight: 1.7,
  maxWidth: 350,
};

export default {
  container,
  identityRow,
  slogan,
  description,
};