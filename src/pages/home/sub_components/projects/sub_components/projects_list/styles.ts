import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
  },

  gap: {
    xs: 3,
    md: 4,
  },

  mt: {
    xs: 5,
    md: 6,
  },
};

export default {
  grid,
};