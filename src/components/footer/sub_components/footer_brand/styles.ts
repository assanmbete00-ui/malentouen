import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  maxWidth: 340,
};

const logo: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const title: SxProps<Theme> = {
  fontWeight: 700,
  color: "primary.contrastText",
  opacity: 0.82,
  lineHeight: 1.3,
};

const slogan: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.82,
  fontSize: 14,
  lineHeight: 1.8,
};

const description: SxProps<Theme> = {
  color: "primary.contrastText",
  opacity: 0.82,
  fontSize: 14,
  lineHeight: 1.8,
};

export default {
  container,
  logo,
  title,
  slogan,
  description,
};