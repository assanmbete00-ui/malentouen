import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",

  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
  },

  alignItems: "center",

  gap: {
    xs: 5,
    md: 6,
    lg: 8,
  },
};

const visualColumn: SxProps<Theme> = {
  minWidth: 0,

  display: "flex",
  flexDirection: "column",

  gap: {
    xs: 3,
    md: 3.5,
  },
};

export default {
  container,
  visualColumn,
};