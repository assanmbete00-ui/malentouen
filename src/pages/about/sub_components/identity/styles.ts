import type { SxProps, Theme } from "@mui/material";

const content: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    lg: "1fr 1fr",
  },

  gap: {
    xs: 5,
    md: 7,
    lg: 9,
  },

  alignItems: "center",
};

const imageWrapper: SxProps<Theme> = {
  width: "100%",
};

const image: SxProps<Theme> = {
  width: "100%",
  display: "block",

  borderRadius: 4,

  objectFit: "cover",
};

const body: SxProps<Theme> = {
  display: "flex",

  flexDirection: "column",

  gap: 3,
};

const descriptions: SxProps<Theme> = {
  display: "flex",

  flexDirection: "column",

  gap: 2,
};

const highlights: SxProps<Theme> = {
  display: "grid",

  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(3,1fr)",
  },

  gap: 3,

  mt: 2,
};

const highlight: SxProps<Theme> = {
  display: "flex",

  flexDirection: "column",

  gap: 1,
};

const highlightTitle: SxProps<Theme> = {
  fontWeight: 700,

  color: "primary.main",
};

const highlightDescription: SxProps<Theme> = {
  color: "text.secondary",
};

export default {
  content,
  imageWrapper,
  image,
  body,
  descriptions,
  highlights,
  highlight,
  highlightTitle,
  highlightDescription,
};