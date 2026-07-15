import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
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