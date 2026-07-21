import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  mt: {
    xs: 3.5,
    md: 4,
  },

  mb: 0,

  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

const rule: SxProps<Theme> = {
  width: 110,
  height: 1,
  bgcolor: "secondary.main",
  mb: 2,
};

const name: SxProps<Theme> = {
  color: "text.primary",

  fontSize: {
    xs: 23,
    md: 26,
  },

  fontWeight: 800,
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