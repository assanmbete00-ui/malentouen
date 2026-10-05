import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  bgcolor: "primary.main",
  color: "primary.contrastText",

  pt: {
    xs: 4,
    md: 4.5,
    lg: 5,
  },

  pb: {
    xs: 2.5,
    md: 3,
  },

  px: {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
  },
};

const inner: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1600px",
  mx: "auto",
};

const main: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "1.6fr 1fr 1fr 1.2fr",
  },

  alignItems: "start",

  columnGap: {
    xs: 0,
    sm: 5,
    md: 6,
    lg: 7,
  },

  rowGap: {
    xs: 4,
    sm: 4.5,
    md: 5,
  },
};

export default {
  root,
  inner,
  main,
};