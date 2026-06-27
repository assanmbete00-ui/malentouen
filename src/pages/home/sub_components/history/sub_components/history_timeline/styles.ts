import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",
  gap: 3,
};

const item: SxProps<Theme> = {
  position: "relative",
  pl: 3,
  borderLeft: "2px solid",
  borderColor: "secondary.main",
};

const period: SxProps<Theme> = {
  color: "secondary.main",
  fontWeight: 900,
  fontSize: 14,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const title: SxProps<Theme> = {
  mt: 0.8,
  color: "text.primary",
  fontWeight: 800,
  fontSize: 17,
  lineHeight: 1.5,
};

export default {
  container,
  item,
  period,
  title,
};