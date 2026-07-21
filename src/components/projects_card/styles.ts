import type { SxProps, Theme } from "@mui/material";

const link: SxProps<Theme> = {
  display: "block",
  height: "100%",
  textDecoration: "none",
  color: "inherit",
};

const card: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const media: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "16 / 10",
  overflow: "hidden",
  bgcolor: "background.default",
};

const image: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  transition: "transform 0.45s ease",

  ".MuiCard-root:hover &": {
    transform: "scale(1.03)",
  },
};

const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flex: 1,

  p: {
    xs: 2.5,
    md: 3,
  },
};

const title: SxProps<Theme> = {
  color: "text.primary",

  fontSize: {
    xs: 19,
    md: 21,
  },

  fontWeight: 900,
  lineHeight: 1.35,
};

const description: SxProps<Theme> = {
  mt: 1.5,
  color: "text.secondary",

  fontSize: {
    xs: 15,
    md: 16,
  },

  lineHeight: 1.75,
};

export default {
  link,
  card,
  media,
  image,
  content,
  title,
  description,
};