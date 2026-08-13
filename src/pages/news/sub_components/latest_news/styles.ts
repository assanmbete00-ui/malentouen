import type { SxProps, Theme } from "@mui/material";

const headerAction: SxProps<Theme> = {
  color: "primary.main",
};

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(3, minmax(0, 1fr))",
  },
  gap: { xs: 3, md: 3.5 },
};

const card: SxProps<Theme> = {
  height: "100%",
};

export default { headerAction, grid, card };