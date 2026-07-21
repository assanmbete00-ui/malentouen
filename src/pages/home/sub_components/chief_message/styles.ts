import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "100%",

  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "minmax(0, 0.82fr) minmax(0, 1.18fr)",
  },

  alignItems: "center",

  gap: {
    xs: 4,
    md: 6,
    lg: 8,
  },
};

export default {
  container,
};