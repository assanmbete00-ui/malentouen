import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "48% 52%",
  },
  alignItems: "stretch",

  gap: {
    xs: 5,
    md: 11,
  },
};

export default {
  container,
};
