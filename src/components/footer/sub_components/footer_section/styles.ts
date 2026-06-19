import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
};

const title: SxProps<Theme> = {
  fontSize: 15,
  fontWeight: 800,
  color: "primary.contrastText",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export default {
  container,
  title,
  content,
};