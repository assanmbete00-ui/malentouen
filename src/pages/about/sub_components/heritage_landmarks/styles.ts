import type {
  SxProps,
  Theme,
} from "@mui/material";

const grid: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, minmax(0, 1fr))",
  },

  gap: {
    xs: 3,
    md: 4,
  },
};

const card: SxProps<Theme> = {
  height: "100%",
};

const imageWrapper: SxProps<Theme> = {
  overflow: "hidden",

  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",
};

const image: SxProps<Theme> = {
  display: "block",

  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
  transition: "transform .35s ease",

  ".MuiCard-root:hover &": {
    transform: "scale(1.04)",
  },
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",

  p: {
    xs: 3,
    md: 4,
  },
};

const title: SxProps<Theme> = {
  color: "text.primary",
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",
};

export default {
  grid,
  card,
  imageWrapper,
  image,
  content,
  title,
  description,
};