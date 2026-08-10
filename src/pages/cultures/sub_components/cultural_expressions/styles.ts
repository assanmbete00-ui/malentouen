import type {
  SxProps,
  Theme,
} from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, minmax(0, 1fr))",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const card: SxProps<Theme> = {
  height: "100%",
};

export default {
  grid,
  card,
};