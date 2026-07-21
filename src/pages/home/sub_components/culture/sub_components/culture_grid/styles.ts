import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  width: "100%",
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
  },

  gridAutoRows: "1fr",

  gap: {
    xs: 3,
    md: 4,
  },

  mt: 0,
};

const card: SxProps<Theme> = {
  minWidth: 0,
  height: "100%",
};

export default {
  root,
  card,
};