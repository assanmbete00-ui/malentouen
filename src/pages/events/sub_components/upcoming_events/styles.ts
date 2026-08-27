import type { SxProps, Theme } from "@mui/material";

const grid = (itemCount: number): SxProps<Theme> => ({
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: itemCount === 2 ? "repeat(2, minmax(0, 1fr))" : "1fr",
    md: "1fr",
    lg: itemCount === 1 ? "1fr" : "minmax(0, 3fr) minmax(0, 2fr)",
  },
  gridTemplateRows: {
    xs: "none",
    lg: itemCount === 3 ? "repeat(2, minmax(0, 1fr))" : "none",
  },
  gap: { xs: 2.5, md: 3 },
});

const item = (index: number, itemCount: number): SxProps<Theme> => ({
  minWidth: 0,
  ...(index === 0 && itemCount > 1
    ? {
        gridRow: { lg: "1 / -1" },
      }
    : {}),
  ...(itemCount === 3 && index > 0
    ? {
        minHeight: { lg: 0 },
      }
    : {}),
});

export default { grid, item };
