import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const layout: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
  },

  gap: {
    xs: 4,
    md: 5,
    lg: 6,
  },

  mt: {
    xs: 5,
    md: 6,
  },

  alignItems: "stretch",
};

const details: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  px: {
    xs: 0,
    lg: 1,
  },
};

export default {
  container,
  layout,
  details,
};