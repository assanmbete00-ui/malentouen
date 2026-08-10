import type { SxProps, Theme } from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
    lg: "repeat(12, minmax(0, 1fr))",
  },

  gridAutoFlow: {
    lg: "dense",
  },

  gap: {
    xs: 2.5,
    md: 3,
  },
};

const item: SxProps<Theme> = {
  minWidth: 0,

  "&:nth-of-type(1)": {
    gridColumn: {
      lg: "span 6",
    },
  },

  "&:nth-of-type(2)": {
    gridColumn: {
      lg: "span 3",
    },
  },

  "&:nth-of-type(3)": {
    gridColumn: {
      lg: "span 3",
    },
  },

  "&:nth-of-type(4)": {
    gridColumn: {
      lg: "span 4",
    },
  },

  "&:nth-of-type(5)": {
    gridColumn: {
      lg: "span 5",
    },
  },

  "&:nth-of-type(6)": {
    gridColumn: {
      lg: "span 3",
    },
  },
};

const card: SxProps<Theme> = {
  height: "100%",

  aspectRatio: {
    xs: "4 / 3",
    sm: "4 / 5",
  },

  "& .MuiCard-root": {
    height: "100%",
  },
};

export default {
  grid,
  item,
  card,
};