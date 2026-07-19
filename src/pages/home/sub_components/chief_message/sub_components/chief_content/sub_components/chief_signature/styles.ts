import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: 0,
  mb: 4,
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

const rule: SxProps<Theme> = {
  width: 140,
  height: 1,
  bgcolor: "secondary.main",
  mb: 3,
};

const name: SxProps<Theme> = {
  fontWeight: 800,
  color: "text.primary",
  fontSize: 30,
  lineHeight: 1.2,
};

const title: SxProps<Theme> = {
  color: "secondary.main",
  fontSize: 12,
  lineHeight: 1.6,
  textTransform: "uppercase",
  letterSpacing: ".14em",
  fontWeight: 700,
};

export default {
  container,
  rule,
  name,
  title,
};
