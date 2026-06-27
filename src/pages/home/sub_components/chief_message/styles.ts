import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "420px 1fr",
  },

  alignItems: "center",

  gap: {
    xs: 6,
    md: 10,
  },
};

export default {
  container,
};