import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "1.05fr 0.95fr",
  },
  alignItems: "center",
  gap: {
    xs: 6,
    md: 8,
    lg: 10,
  },
};

const visualColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

export default {
  container,
  visualColumn,
};