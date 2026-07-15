import type { SxProps, Theme } from "@mui/material";

const list: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
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
  list,
};