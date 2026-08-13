import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(6, minmax(0, 1fr))",
  },
  gap: { xs: 2.5, md: 3 },
};

const item: SxProps<Theme> = {
  minWidth: 0,

  "&:nth-of-type(1), &:nth-of-type(2)": {
    gridColumn: { lg: "span 3" },
  },

  "&:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5)": {
    gridColumn: { lg: "span 2" },
  },

  "&:nth-of-type(6)": {
    gridColumn: { sm: "1 / -1", lg: "1 / -1" },
  },
};

const card: SxProps<Theme> = {
  height: "100%",
  aspectRatio: "4 / 3",
};

const cardPanoramic: SxProps<Theme> = {
  height: "100%",
  aspectRatio: {
    xs: "4 / 3",
    sm: "16 / 9",
    lg: "21 / 8",
  },
};

export default {
  grid,
  item,
  card,
  cardPanoramic,
};