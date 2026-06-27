import type { SxProps, Theme } from "@mui/material";

const root: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
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
  root,
};