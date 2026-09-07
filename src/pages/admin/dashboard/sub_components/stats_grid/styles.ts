import type { SxProps, Theme } from "@mui/material";

export const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(2, 1fr)",
    sm: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  },
  gap: { xs: 2, md: 3 },
};
