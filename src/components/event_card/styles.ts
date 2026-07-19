import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  textDecoration: "none",
  color: "inherit",
};

const content: SxProps<Theme> = {
  position: "relative",
  p: {
    xs: 2.5,
    md: 3,
  },
  pl: {
    xs: 3,
    md: 3.5,
  },
};

const marker: SxProps<Theme> = {
  position: "absolute",
  top: {
    xs: 26,
    md: 30,
  },
  left: 0,
  width: 10,
  height: 10,
  borderRadius: "50%",
  bgcolor: "secondary.main",
};

const title: SxProps<Theme> = {
  color: "text.primary",
  fontSize: {
    xs: 18,
    md: 21,
  },
  fontWeight: 900,
  lineHeight: 1.35,
};

const date: SxProps<Theme> = {
  mt: 1.2,
  color: "secondary.main",
  fontSize: 14,
  fontWeight: 900,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const meta: SxProps<Theme> = {
  mt: 1,
  color: "text.secondary",
  fontSize: 14,
  lineHeight: 1.7,
};

const category: SxProps<Theme> = {
  mt: 1.5,
  display: "inline-block",
  color: "text.secondary",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export default {
  link,
  content,
  marker,
  title,
  date,
  meta,
  category,
};